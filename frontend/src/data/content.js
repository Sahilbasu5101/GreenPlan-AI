export const projectData = {
  title: "GreenPlan AI",
  tagline: "Agentic AI for Cleaner Air, Safer Communities & Greener Cities",
  lead: "Move beyond conventional AQI dashboards. GreenPlan AI connects environmental diagnosis, vulnerable-population protection, and long-term nature-based intervention planning in one evidence-led platform built on the MERN stack and AWS.",
  authorBadge: "AWS Bharat Build · MERN Stack · Bounded Agentic AI",
  statusBadge: "Hackathon MVP · Built on AWS",
  
  pillars: [
    {
      id: "greening",
      number: "01",
      title: "Urban Greening & Tree Intelligence",
      subtitle: "Long-term nature-based interventions",
      badge: "Feature 1",
      accent: "border-teal-600 text-teal-700",
      bgAccent: "bg-teal-50",
      description: "Turns environmental need into a practical, site-aware planting plan, then tracks trees after planting.",
      points: [
        "Environmental need mapping combining land-surface temperature, canopy cover & heat exposure",
        "Plantable-space discovery using GIS, satellite imagery & land-use layers (vacant parcels, road verges)",
        "Soil & site suitability scoring (pH, texture, compaction, drainage, water access)",
        "Tree Passport with unique ID, GPS, species, photo history, watering & inspection records",
        "Survival cohort tracking separating measured outcomes from modeled projections"
      ],
      samplePassport: {
        id: "GP-TREE-DEL-0419",
        species: "Azadirachta indica (Neem)",
        site: "Ward 4 · School Perimeter Zone B",
        gps: "28.6139° N, 77.2090° E",
        plantedDate: "14 Aug 2025",
        canopyCover: "14.2 m²",
        soilPH: "7.1 (Optimal)",
        status: "Healthy / Vigorous",
        lastWatered: "Yesterday at 07:30 AM",
        survivalRisk: "Low (88% confidence)",
        awsService: "Amazon S3 (Photos) + OpenSearch (Geospatial Index)"
      }
    },
    {
      id: "health",
      number: "02",
      title: "Air Health & Safety",
      subtitle: "Immediate vulnerable-population protection",
      badge: "Feature 2",
      accent: "border-amber-500 text-amber-700",
      bgAccent: "bg-amber-50",
      description: "Translates air-quality data into timely, authoritative protective actions for sensitive facilities and groups.",
      points: [
        "Facility registration for schools, hospitals, childcare centers and eldercare homes",
        "Location-relevant exposure mapping using station data, local forecasts & traffic context",
        "Configurable threshold alerts based on trusted public-health guidance",
        "Human-in-the-loop acknowledgment workflow before notices or ventilation actions are dispatched",
        "Strict medical safety boundary: exposure awareness, not clinical diagnosis"
      ],
      sampleAlert: {
        id: "ALT-FAC-2026-992",
        facility: "Kendriya Vidyalaya School · Ward 4",
        exposurePM25: "184 µg/m³ (Unhealthy)",
        forecastTrend: "Rising over next 3 hours",
        thresholdTrigger: "PM2.5 > 150 µg/m³ for outdoor activity restriction",
        recommendedAction: "Move physical education classes indoors & activate HEPA filters",
        status: "Pending Staff Acknowledgment",
        dispatchedBy: "Exposure & Alert Agent via Amazon SNS",
        policyEngine: "Cedar Policy Guardrail"
      }
    },
    {
      id: "pollution",
      number: "03",
      title: "Pollution Intelligence",
      subtitle: "Root-cause diagnostics & regional movement",
      badge: "Feature 3",
      accent: "border-sky-600 text-sky-700",
      bgAccent: "bg-sky-50",
      description: "Investigates why air quality is deteriorating, where emissions originate, and what interventions deserve attention.",
      points: [
        "Root-cause investigation correlating pollutant spikes with weather, traffic & inventories",
        "Regional movement tracking with wind fields and atmospheric transport modeling",
        "Transparent hypothesis labeling: causes flagged as evidence-backed hypotheses, not guesses",
        "Source contribution indicators (traffic mix, industrial plumes, road dust, biomass burning)",
        "Audit trail detailing confidence levels, missing sensors, and alternative explanations"
      ],
      sampleInvestigation: {
        id: "INV-EPISODE-104",
        episode: "Morning Peak Inversion Event",
        dominantVector: "North-West Wind @ 12.4 km/h",
        probableContributors: [
          { source: "Arterial Congestion / Diesel Freight", share: "~45% (High confidence)" },
          { source: "Regional Biomass / Crop Residue", share: "~35% (Medium confidence)" },
          { source: "Local Unpaved Road Dust", share: "~20% (Verified ground report)" }
        ],
        boundaryLayer: "Low temperature inversion layer at 220m trap",
        missingData: "VOC sensor offline at Sector 9 station",
        orchestration: "Strands Agents SDK + Bedrock"
      }
    }
  ],

  unifiedLoop: [
    {
      step: "01",
      title: "Diagnose",
      agent: "Pollution Investigation Agent",
      role: "Investigate why air quality is deteriorating and trace wind/emission signals with uncertainty metrics.",
      aws: "OpenSearch + Strands Agents SDK"
    },
    {
      step: "02",
      title: "Protect",
      agent: "Exposure & Alert Agent",
      role: "Identify nearby schools/hospitals, calculate exposure, and draft alerts requiring human staff approval.",
      aws: "Amazon SNS + Cedar Policy"
    },
    {
      step: "03",
      title: "Intervene",
      agent: "GeoScout / Greening Agent",
      role: "Shortlist vacant verges, score soil suitability, match canopy species, and optimize planting budget.",
      aws: "Bedrock / SageMaker + S3"
    },
    {
      step: "04",
      title: "Verify",
      agent: "Tree Guardian & Impact Auditor",
      role: "Create Tree Passports, schedule drone/image maintenance checks, and audit actual survival vs models.",
      aws: "Amazon EventBridge + CloudWatch"
    }
  ],

  agents: [
    {
      name: "Coordinator Agent",
      role: "Workflow Orchestrator",
      desc: "Delegates tasks, combines results, requests human approval gates, and manages mission state via Strands Agents SDK.",
      awsTool: "Strands Agents SDK / Bedrock"
    },
    {
      name: "Environmental Analyst",
      role: "Data Ingestion & QC",
      desc: "Collects station observations, satellite feeds, verifies freshness, and flags coverage gaps into OpenSearch.",
      awsTool: "AWS Lambda / OpenSearch"
    },
    {
      name: "Pollution Investigation Agent",
      role: "Root-Cause Diagnostics",
      desc: "Builds evidence-backed hypotheses connecting weather, wind fields, and local emissions inventories.",
      awsTool: "SageMaker AI / OpenSearch"
    },
    {
      name: "Exposure & Alert Agent",
      role: "Facility Protection",
      desc: "Applies authoritative safety thresholds to facilities and drafts alerts protected by Cedar Policy.",
      awsTool: "Amazon SNS / Cedar Auth"
    },
    {
      name: "GeoScout / Greening Agent",
      role: "Site & Species Matching",
      desc: "Shortlists plantable parcels, verifies utility/land constraints, and matches resilient tree species.",
      awsTool: "Deterministic Node API + S3"
    },
    {
      name: "Tree Guardian Agent",
      role: "Tree Passport & Health",
      desc: "Reviews photo records, runs visual stress screening, schedules watering and field inspections.",
      awsTool: "Rekognition / S3 Storage"
    },
    {
      name: "Impact Auditor Agent",
      role: "Verification & Audit Trails",
      desc: "Compares baseline vs follow-up sensor data, audits survival cohorts, and flags unsupported claims.",
      awsTool: "Amazon CloudWatch / Audit Log"
    }
  ],

  awsArchitecture: {
    overview: "Built for Bharat Build: Full compliance with AWS Open Source & Cloud Service guidelines.",
    buildItLocal: [
      {
        category: "Agents and AI",
        tool: "Strands Agents SDK",
        purpose: "Orchestrates multi-agent environmental decision loops (Coordinator, GeoScout, Tree Guardian) with deterministic tool boundaries."
      },
      {
        category: "Data and Search",
        tool: "OpenSearch",
        purpose: "Indexes historical pollution episodes, GIS spatial polygons, and facility caution zones for sub-second spatial queries."
      },
      {
        category: "Auth and Policy",
        tool: "Cedar Policy Engine",
        purpose: "Fine-grained deterministic authorization rules enforcing human-in-the-loop signoff before school advisories or planting budgets are executed."
      },
      {
        category: "Serverless Local",
        tool: "LocalStack & SAM CLI",
        purpose: "Local testing of serverless worker triggers and SNS event dispatch without incurring cloud billing during iteration."
      }
    ],
    shipItCloud: [
      {
        service: "AWS Amplify / App Runner",
        role: "Frontend & API Hosting",
        detail: "Hosts the React 19 SPA with global CDN caching and deploys the Express.js microservice backend."
      },
      {
        service: "Amazon S3",
        role: "Tree Passport Photo Vault",
        detail: "Stores high-resolution tree inspection photos, drone canopy imagery, and GIS shapefiles with tamper-proof versioning."
      },
      {
        service: "Amazon EventBridge & SNS",
        role: "Alert Dispatch & Cron Plumbing",
        detail: "Schedules hourly sensor freshness scans and delivers real-time SMS/Email advisories to verified school administrators."
      },
      {
        service: "Amazon Bedrock / SageMaker",
        role: "Bounded Agentic Intelligence",
        detail: "Powers structured tool-calling for specialist agents with strict system prompts preventing hallucinated measurements."
      }
    ]
  },

  judgingCriteria: [
    {
      number: "01",
      title: "Idea and Impact",
      tagline: "Solving real air exposure & greening verification",
      badge: "Real Environmental Fix",
      response: "Instead of generic AQI heatmaps, GreenPlan AI solves a high-stakes problem: vulnerable children and patients breathing toxic air right now, while ensuring municipal trees actually survive rather than dying unwatered after photo-ops."
    },
    {
      number: "02",
      title: "Built on AWS",
      tagline: "Open-source + Cloud Free Tier compliance",
      badge: "Mandatory Prize Criterion",
      response: "Built directly using official AWS Bharat Build technologies: Strands Agents SDK for multi-agent loops, Cedar for human authorization policies, OpenSearch for episode search, Amazon S3 for Tree Passports, and Amazon SNS for facility alerts."
    },
    {
      number: "03",
      title: "Design and Usability",
      tagline: "Built for municipal ward officers & principals",
      badge: "Intuitive & Accessible",
      response: "Ultra-minimalist, high-contrast interface designed so an authorized school principal can acknowledge and execute an indoor air protocol in one click, without requiring data science training."
    },
    {
      number: "04",
      title: "The Execution",
      tagline: "One working end-to-end workflow beats 5 broken ones",
      badge: "Rock-Solid Working MVP",
      response: "Focused on a single defensible pilot ward (Ward 4) and one real pollution inversion event. Every button works: from root cause diagnosis to tree passport registration and impact verification."
    },
    {
      number: "05",
      title: "The 3-Minute Demo Video",
      tagline: "Clear 6-stage narrative ready for judges",
      badge: "Structured Storyboard",
      response: "Storyboarded across 6 crisp stages: Detect → Investigate → Protect → Intervene → Verify → Audit. Explicitly shows judges where AWS tools fit at every second of the 3-minute recording."
    }
  ],

  techStack: [
    {
      layer: "Frontend (Client)",
      tech: "React 19 + Vite, Tailwind CSS, Leaflet GIS",
      detail: "Clean minimalist slide deck UI, interactive geospatial maps, facility alerts, and tree passport inspection console hosted on AWS Amplify."
    },
    {
      layer: "Backend / API",
      tech: "Node.js, Express, Cedar Policy Engine",
      detail: "Deterministic scoring algorithms, Cedar authorization rules for human-in-the-loop signoff, REST APIs deployed on AWS App Runner."
    },
    {
      layer: "Database & Search",
      tech: "MongoDB / DocumentDB + OpenSearch",
      detail: "Stores facilities, tree passports, candidate planting sites, pollution missions, and geospatial 2dsphere indexes."
    },
    {
      layer: "AWS AI & Plumbing",
      tech: "Strands Agents SDK, S3, EventBridge, SNS",
      detail: "Bounded specialist agents with structured tool calling, photo inspection vault on S3, and push notifications via SNS."
    }
  ],

  demoNarrative: [
    {
      stage: "1. Detect",
      action: "Pollution episode detected in pilot ward",
      evidence: "Station PM2.5 crosses 175 µg/m³; satellite confirms regional aerosol plume. EventBridge triggers freshness validation.",
      awsNote: "Triggered by Amazon EventBridge"
    },
    {
      stage: "2. Investigate",
      action: "Agent correlates weather & traffic data",
      evidence: "Strands Agent queries OpenSearch for historical inversion analogs; correlates NW wind vector @ 14 km/h with 78% confidence.",
      awsNote: "Strands Agents SDK + OpenSearch"
    },
    {
      stage: "3. Protect",
      action: "System alerts registered facilities",
      evidence: "Drafts indoor PE alert for Kendriya Vidyalaya School; Cedar policy checks principal authorization; dispatches via Amazon SNS.",
      awsNote: "Cedar Policy + Amazon SNS"
    },
    {
      stage: "4. Intervene",
      action: "GeoScout plans site-aware greening",
      evidence: "Identifies 420m road verge, verifies soil pH (7.2), recommends 45 Neem saplings within ward planting budget constraints.",
      awsNote: "Deterministic Node logic + Bedrock"
    },
    {
      stage: "5. Verify",
      action: "Tree Guardian inspects tree passports",
      evidence: "Issues GPS-tagged Tree Passports stored in MongoDB; field photo uploaded to Amazon S3; visual screener flags routine watering.",
      awsNote: "Amazon S3 Vault + Vision AI"
    },
    {
      stage: "6. Audit",
      action: "Impact panel reconciles actual outcomes",
      evidence: "Reconciles actual 8-month canopy observations against projections; writes tamper-proof audit record to CloudWatch.",
      awsNote: "Amazon CloudWatch Audit Trail"
    }
  ],

  differentiators: [
    {
      feature: "Three Linked Layers",
      whyItMatters: "Connects root cause investigation, vulnerable human protection, and nature-based interventions into a single continuous loop."
    },
    {
      feature: "Agentic Workflow on AWS",
      whyItMatters: "Powered by Strands Agents SDK to orchestrate data retrieval, explain evidence, and re-plan—not just a generic chatbot over static graphs."
    },
    {
      feature: "Evidence-First Reasoning",
      whyItMatters: "Always discloses data source, timestamp, confidence level, missing sensor flags, and alternative hypotheses."
    },
    {
      feature: "Tree-Level Accountability",
      whyItMatters: "Tracks individual trees via Tree Passports and survival rates, avoiding superficial sapling-count greenwashing."
    },
    {
      feature: "Cedar Policy Guardrails",
      whyItMatters: "Requires authorized human approval for public school alerts, planting budgets, and policy intervention decisions using AWS Cedar."
    }
  ]
};
