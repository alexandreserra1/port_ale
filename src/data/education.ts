export interface Education {
  institution: string
  degree: string
  degreeEn: string
  period: string
  periodEn: string
}

export const education: Education[] = [
  {
    institution: "Faculdade de Engenharia da Universidade do Porto",
    degree: "Bacharelado em Engenharia Informática e Computação",
    degreeEn: "BSc in Informatics and Computing Engineering",
    period: "jul 2014 — jan 2019",
    periodEn: "Jul 2014 — Jan 2019",
  },
  {
    institution: "Senac São Paulo",
    degree: "Graduação em Análise e Desenvolvimento de Sistemas",
    degreeEn: "Degree in Systems Analysis and Development",
    period: "jan 2024 — jan 2026",
    periodEn: "Jan 2024 — Jan 2026",
  },
]
