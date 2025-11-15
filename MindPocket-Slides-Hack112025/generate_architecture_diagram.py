#!/usr/bin/env python3
"""
Generate MindPocket Architecture Diagram
Requires: pip install diagrams
"""

from diagrams import Diagram, Cluster, Edge
from diagrams.aws.compute import Lambda
from diagrams.aws.database import Dynamodb
from diagrams.aws.storage import S3
from diagrams.aws.integration import SQS
from diagrams.aws.network import APIGateway
from diagrams.aws.security import Cognito
from diagrams.aws.mobile import Amplify
from diagrams.aws.ml import Transcribe, Sagemaker
from diagrams.onprem.client import Users
from diagrams.saas.chat import Telegram
from diagrams.programming.framework import React

# Configure diagram
graph_attr = {
    "fontsize": "16",
    "bgcolor": "transparent",
    "pad": "0.5",
    "splines": "ortho",
    "nodesep": "0.8",
    "ranksep": "1.2"
}

node_attr = {
    "fontsize": "14",
    "style": "filled",
    "fillcolor": "#1a1b26",
    "fontcolor": "#a9b1d6",
    "color": "#7aa2f7",
    "penwidth": "2"
}

edge_attr = {
    "color": "#7aa2f7",
    "penwidth": "2",
    "arrowsize": "0.8"
}

with Diagram(
    "MindPocket - Arquitectura Serverless AWS",
    filename="public/mindpocket_architecture",
    show=False,
    direction="LR",
    graph_attr=graph_attr,
    node_attr=node_attr,
    edge_attr=edge_attr,
    outformat="png"
):
    
    # Users & Input
    user = Users("Usuario")
    telegram = Telegram("Telegram Bot")
    
    with Cluster("Frontend"):
        amplify = Amplify("Amplify Hosting")
        cognito = Cognito("Cognito Auth")
        react = React("Next.js App")
        
        cognito >> Edge(label="auth") >> react
        react >> amplify
    
    with Cluster("API Layer"):
        api_gateway = APIGateway("API Gateway")
        telegram_lambda = Lambda("Telegram\nWebhook")
        get_items_lambda = Lambda("Get Items")
        get_item_lambda = Lambda("Get Item")
        delete_lambda = Lambda("Delete Item")
    
    with Cluster("Processing"):
        process_queue = SQS("Process\nQueue")
        dlq = SQS("Dead Letter\nQueue")
        process_lambda = Lambda("Process\nTikTok")
        transcribe_callback = Lambda("Transcribe\nCallback")
    
    with Cluster("AI Services"):
        transcribe = Transcribe("Google Speech\n(Transcription)")
        bedrock = Sagemaker("Bedrock\n(Claude AI)")
    
    with Cluster("Storage"):
        dynamodb = Dynamodb("DynamoDB\n(Items)")
        raw_media_s3 = S3("S3 Raw\nMedia")
        transcripts_s3 = S3("S3\nTranscripts")
    
    # Flow: User sends TikTok link via Telegram
    user >> Edge(label="1. Share TikTok") >> telegram
    telegram >> Edge(label="2. Webhook") >> api_gateway
    api_gateway >> telegram_lambda
    
    # Flow: Lambda processes and queues
    telegram_lambda >> Edge(label="3. Create item") >> dynamodb
    telegram_lambda >> Edge(label="4. Queue job") >> process_queue
    
    # Flow: Process TikTok
    process_queue >> Edge(label="5. Trigger") >> process_lambda
    process_lambda >> Edge(label="6. Save media") >> raw_media_s3
    
    # Flow: Transcription
    process_lambda >> Edge(label="7. Audio") >> transcribe
    transcribe >> Edge(label="8. Callback") >> transcribe_callback
    transcribe_callback >> Edge(label="9. Save") >> transcripts_s3
    
    # Flow: AI Classification
    transcribe_callback >> Edge(label="10. Classify") >> bedrock
    bedrock >> Edge(label="11. Update") >> dynamodb
    
    # Error handling
    process_queue >> Edge(label="errors", style="dashed", color="red") >> dlq
    
    # Flow: User views items
    user >> Edge(label="12. Browse") >> react
    react >> api_gateway
    api_gateway >> get_items_lambda
    get_items_lambda >> Edge(label="13. Query") >> dynamodb
    
    # CRUD operations
    api_gateway >> get_item_lambda >> dynamodb
    api_gateway >> delete_lambda >> dynamodb

print("✅ Diagram generated: public/mindpocket_architecture.png")
