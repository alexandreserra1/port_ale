export interface Project {
  title: string
  titleEn: string
  description: string
  descriptionEn: string
  technologies: string[]
  image?: string
  githubUrl?: string
  demoUrl?: string
}

export const projects: Project[] = [
  {
    title: "StriderEdge OS",
    titleEn: "StriderEdge OS",
    description: "Plataforma local-first de análise esportiva e prevenção de lesões: visão computacional em Rust, biomecânica de vídeo e um coach RAG citável com guardrails anti-alucinação.",
    descriptionEn: "A local-first sports analysis and injury-prevention platform: Rust computer vision, video biomechanics and a citable RAG coach with anti-hallucination guardrails.",
    technologies: ["Rust", "Ollama", "RAG", "Computer Vision", "Qwen"],
    image: "/images/strideredge-os.png",
    githubUrl: "https://github.com/alexandreserra1/strideredge_os",
  },
  {
    title: "Plataforma de Dados Agro",
    titleEn: "Agribusiness Data Platform",
    description: "Plataforma analítica modular com DuckDB, Parquet, ClickHouse e Airflow que transforma dados de safra e geoespaciais em decisões para operações em mais de 15 estados.",
    descriptionEn: "A modular analytical platform with DuckDB, Parquet, ClickHouse and Airflow that turns crop and geospatial data into decisions across 15+ Brazilian states.",
    technologies: ["DuckDB", "ClickHouse", "Airflow", "Parquet", "Python"],
    image: "/images/agro-data-platform.png",
  },
  {
    title: "Evolução do Core de Pagamentos",
    titleEn: "Payment Core Evolution",
    description: "Migração progressiva de um monolito Django para microsserviços em Go, com Strangler Fig, database-per-service e observabilidade com Datadog e OpenTelemetry.",
    descriptionEn: "A progressive Django-monolith migration to Go microservices, using Strangler Fig, database-per-service and Datadog/OpenTelemetry observability.",
    technologies: ["Go", "Rust", "Kafka", "OpenTelemetry", "PostgreSQL"],
    image: "/images/payment-systems.png",
  },
  {
    title: "RAG Local com Evidências",
    titleEn: "Evidence-grounded Local RAG",
    description: "Arquitetura de IA privada com busca híbrida, reranking, avaliação inspirada em RAGAS e citações verificáveis — feita para responder com contexto ou não responder.",
    descriptionEn: "A private AI architecture with hybrid search, reranking, RAGAS-inspired evaluation and verifiable citations — designed to answer with context or not answer at all.",
    technologies: ["RAG", "LLM", "Hybrid Search", "Reranking", "Evaluation"],
    image: "/images/local-rag.png",
  },
]
