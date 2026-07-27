export interface Experience {
  company: string
  role: string
  roleEn: string
  period: string
  periodEn: string
  description: string
  descriptionEn: string
  technologies: string[]
}

export const experiences: Experience[] = [
  {
    company: "Agroconsult",
    role: "Software Engineer · Data & Full-stack",
    roleEn: "Software Engineer · Data & Full-stack",
    period: "dez 2024 — jul 2026",
    periodEn: "Dec 2024 — Jul 2026",
    description: "Construí produtos e plataformas de dados para a operação agrícola: uma aplicação Django com arquitetura dual-database que atende mais de 15 estados e, depois, uma camada analítica modular com DuckDB, Parquet, ClickHouse e Airflow. A evolução substituiu rotinas manuais, integrou dados geoespaciais e sustentou dashboards de safra com métricas de ROI e custo por hectare em baixa latência.",
    descriptionEn: "Built products and data platforms for agricultural operations: a Django application with a dual-database architecture serving 15+ states, followed by a modular analytics layer with DuckDB, Parquet, ClickHouse and Airflow. The work replaced manual routines, integrated geospatial data, and sustained low-latency crop dashboards with ROI and cost-per-hectare metrics.",
    technologies: ["Python", "Django", "PostgreSQL", "PostGIS", "DuckDB", "ClickHouse", "Airflow", "Parquet"],
  },
  {
    company: "Stone",
    role: "Backend Developer",
    roleEn: "Backend Developer",
    period: "jan 2023 — nov 2024",
    periodEn: "Jan 2023 — Nov 2024",
    description: "Atuei na evolução de um monolito Django para microsserviços em Go e Rust, com fronteiras de domínio mais claras. Fortaleci logs, métricas e tracing com Datadog e OpenTelemetry, além de fluxos assíncronos confiáveis com MQTT, Kafka e RabbitMQ.",
    descriptionEn: "Worked on evolving a Django monolith toward Go and Rust microservices, with clearer domain boundaries. Strengthened logs, metrics and tracing with Datadog and OpenTelemetry, and built reliable asynchronous flows with MQTT, Kafka and RabbitMQ.",
    technologies: ["Go", "Rust", "Kafka", "RabbitMQ", "Datadog", "OpenTelemetry"],
  },
  {
    company: "Braskem",
    role: "Backend Developer",
    roleEn: "Backend Developer",
    period: "jan 2021 — jan 2023",
    periodEn: "Jan 2021 — Jan 2023",
    description: "Evoluí o backend Django de operações industriais, modelando dados, consultas e workflows de ETL para expor indicadores de produção e telemetria. Em seguida, reescrevi a camada de dados em Django e MySQL, reduzindo relatórios de 25 s para 3 s e ajudando a manter 99,9% de disponibilidade em integrações de sensores críticos com circuit breaker e fallback.",
    descriptionEn: "Evolved the Django backend for industrial operations, modelling data, queries and ETL workflows that exposed production and telemetry indicators. Later rewrote the Django/MySQL data layer, cutting reports from 25 s to 3 s and helping maintain 99.9% availability for critical sensor integrations through circuit breakers and fallbacks.",
    technologies: ["Python", "Django", "MySQL", "Pentaho", "Salesforce", "ETL"],
  },
]
