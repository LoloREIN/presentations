#!/usr/bin/env python3
"""
Generate MindPocket Architecture Diagram - Simplified Version
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
from diagrams.aws.ml import Sagemaker
from diagrams.onprem.client import Users
from diagrams.saas.chat import Telegram
from diagrams.programming.framework import React

# Configure diagram - cleaner layout
graph_attr = {
    "fontsize": "18",
    "bgcolor": "transparent",
    "pad": "1.0",
    "splines": "polyline",
    "nodesep": "1.5",
    "ranksep": "2.0"
}

node_attr = {
    "fontsize": "15",
    "style": "filled",
    "fillcolor": "#1a1b26",
    "fontcolor": "#a9b1d6",
    "color": "#7aa2f7",
    "penwidth": "2.5"
}

edge_attr = {
    "color": "#7aa2f7",
    "penwidth": "2.5",
    "arrowsize": "1.0"
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
    telegram = Telegram("Telegram\nBot")
    
    with Cluster("Frontend", graph_attr={"bgcolor": "#1a1b2640"}):
        react = React("Next.js\nApp")
        amplify = Amplify("Amplify")
        cognito = Cognito("Cognito")
    
    with Cluster("API & Processing", graph_attr={"bgcolor": "#7aa2f740"}):
        api_gateway = APIGateway("API\nGateway")
        lambdas = Lambda("Lambda\nFunctions")
        process_queue = SQS("SQS\nQueue")
    
    with Cluster("AI Services", graph_attr={"bgcolor": "#9d7cd840"}):
        google_speech = Sagemaker("Google\nSpeech")
        bedrock = Sagemaker("Bedrock\nAI")
    
    with Cluster("Storage", graph_attr={"bgcolor": "#449dab40"}):
        dynamodb = Dynamodb("DynamoDB")
        s3 = S3("S3")
    
    # Main Flow: Share TikTok
    user >> Edge(label="1. Share\nTikTok", color="#7aa2f7") >> telegram
    telegram >> Edge(label="2. Webhook", color="#7aa2f7") >> api_gateway
    api_gateway >> Edge(label="3. Process", color="#7aa2f7") >> lambdas
    lambdas >> Edge(label="4. Queue", color="#7aa2f7") >> process_queue
    
    # Processing Flow
    process_queue >> Edge(label="5. Trigger", color="#9d7cd8") >> lambdas
    lambdas >> Edge(label="6. Save\nMedia", color="#9d7cd8") >> s3
    lambdas >> Edge(label="7. Transcribe", color="#9d7cd8") >> google_speech
    google_speech >> Edge(label="8. Text", color="#9d7cd8") >> lambdas
    lambdas >> Edge(label="9. Classify", color="#9d7cd8") >> bedrock
    bedrock >> Edge(label="10. Result", color="#9d7cd8") >> lambdas
    lambdas >> Edge(label="11. Update", color="#9d7cd8") >> dynamodb
    
    # User Viewing Flow
    user >> Edge(label="12. Browse", color="#449dab") >> react
    react >> Edge(label="", color="#449dab") >> cognito
    cognito >> Edge(label="", color="#449dab") >> amplify
    react >> Edge(label="13. Fetch", color="#449dab") >> api_gateway
    api_gateway >> Edge(label="", color="#449dab") >> lambdas
    lambdas >> Edge(label="", color="#449dab") >> dynamodb

print("✅ Diagram generated: public/mindpocket_architecture.png")
