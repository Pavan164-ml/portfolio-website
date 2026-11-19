export const projects = [
  {
    id: "lakemind",
    title: "LakeMind — AI-Powered Lakehouse Platform",
    description: "End-to-end local data platform combining medallion architecture (Bronze/Silver/Gold), DuckDB analytics, Airflow orchestration, Streamlit UIs, and a semantic layer for governed natural-language Q&A. Features ChromaDB RAG with Ollama local LLMs for hybrid SQL + document retrieval.",
    techStack: ["PySpark", "DuckDB", "Airflow", "Streamlit", "FastAPI", "ChromaDB", "Ollama", "Delta Lake", "Parquet"],
    impact: "9 Gold KPI tables • 7 Star-schema dimensions • Semantic layer with 50+ governed metrics • Sub-second query latency on 1M+ rows",
    githubUrl: "https://github.com/Pavan164-ml/LakeMind-AI-Powered-Lakehouse-Platform-",
    demoUrl: "",
    image: "/images/projects/lakemind.png",
    imageAlt: "LakeMind Architecture Diagram",
    featured: true,
    category: "Agentic AI / Data Platform"
  },
  {
    id: "hello-world-agentic-ai",
    title: "Hello World Agentic AI",
    description: "From-scratch local AI agent framework demonstrating the core Reason-Act-Observe loop. Runs entirely offline using Ollama (Phi-3 Mini) with DuckDuckGo search tool — no API keys, no cloud costs. Extensible tool system for adding calculators, file readers, code executors.",
    techStack: ["Python", "Ollama", "Phi-3 Mini", "OpenAI SDK", "DuckDuckGo Search"],
    impact: "Zero-cost local agent • OpenAI-compatible interface • Extensible tool architecture • Educational reference implementation",
    githubUrl: "https://github.com/Pavan164-ml/hello-world-agentic-ai",
    demoUrl: "",
    image: "/images/projects/agentic-ai.png",
    imageAlt: "Agentic AI Architecture",
    featured: true,
    category: "Agentic AI"
  },
  {
    id: "end-to-end-data-eng",
    title: "End-to-End Data Engineering Pipeline",
    description: "Batch analytics pipeline for SaaS product using PySpark with dimensional modeling (star schema), incremental loads, and Airflow orchestration. Implements Bronze/Silver/Gold medallion layers with S3-based lakehouse storage zones.",
    techStack: ["PySpark", "Airflow", "S3", "Delta Lake", "Dimensional Modeling", "Star Schema", "Incremental Loads"],
    impact: "Production-grade ELT pipeline • Star schema with facts/dimensions • Incremental processing • Orchestrated via Airflow DAGs",
    githubUrl: "https://github.com/Pavan164-ml/End-to-End-Data-Engineering-Project",
    demoUrl: "",
    image: "/images/projects/data-pipeline.png",
    imageAlt: "Data Pipeline Architecture",
    featured: false,
    category: "Data Engineering"
  },
  {
    id: "bedrock-extractor",
    title: "Bedrock Data Extractor",
    description: "AWS Bedrock-powered document intelligence for extracting structured data from unstructured documents. Leverages Foundation Models for classification, entity extraction, and schema validation with confidence scoring.",
    techStack: ["AWS Bedrock", "Python", "Claude/Titan Models", "Boto3", "JSON Schema Validation"],
    impact: "Automated document processing • Structured extraction with confidence • Schema validation • Serverless architecture",
    githubUrl: "https://github.com/Pavan164-ml/bedrock-data-extractor",
    demoUrl: "",
    image: "/images/projects/bedrock.png",
    imageAlt: "Bedrock Data Extractor",
    featured: false,
    category: "GenAI / AWS"
  },
  {
    id: "google-flash-chatbot",
    title: "Serverless AI Chatbot with Gemini & AWS",
    description: "Serverless chatbot using Google Gemini Flash via AWS Lambda and API Gateway. Implements conversation memory, context management, and streaming responses with minimal infrastructure overhead.",
    techStack: ["Google Gemini", "AWS Lambda", "API Gateway", "DynamoDB", "Serverless Framework"],
    impact: "Sub-second cold starts • Streaming responses • Cost-effective serverless • Conversation persistence",
    githubUrl: "https://github.com/Pavan164-ml/google-flash-chatbo",
    demoUrl: "",
    image: "/images/projects/gemini-chatbot.png",
    imageAlt: "Gemini Chatbot Architecture",
    featured: false,
    category: "GenAI / Serverless"
  },
  {
    id: "sql-pyspark",
    title: "SQL + PySpark Analytics Toolkit",
    description: "Comprehensive analytics toolkit combining SQL analytics with PySpark for large-scale data processing. Includes 50+ SQL problems solved with PySpark equivalents, performance benchmarks, and optimization patterns.",
    techStack: ["PySpark", "SQL", "Databricks", "Delta Lake", "Performance Tuning"],
    impact: "50+ solved patterns • PySpark-SQL parity • Optimization benchmarks • Production-ready patterns",
    githubUrl: "https://github.com/Pavan164-ml/sql-pyspark",
    demoUrl: "",
    image: "/images/projects/sql-pyspark.png",
    imageAlt: "SQL PySpark Analytics",
    featured: false,
    category: "Data Engineering"
  }
];

export const categories = [
  "All",
  "Agentic AI",
  "Agentic AI / Data Platform",
  "Data Engineering",
  "GenAI / AWS",
  "GenAI / Serverless"
] as const;