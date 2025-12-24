import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Link, useParams, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { 
  Building2, 
  Cog, 
  Zap, 
  Code, 
  Bot, 
  Radio, 
  Factory, 
  Leaf, 
  Mountain, 
  FlaskConical
} from "lucide-react";

const departmentData: Record<string, {
  name: string;
  icon: any;
  description: string;
  overview: string;
  services: { title: string; description: string }[];
  industries: string[];
  technologies: string[];
  projects: { title: string; description: string; industry: string }[];
}> = {
  civil: {
    name: "Civil Engineering",
    icon: Building2,
    description: "Comprehensive civil engineering solutions for infrastructure and construction",
    overview: "Our Civil Engineering department delivers world-class infrastructure and construction solutions. From initial concept design through to project completion, we combine technical expertise with innovative approaches to create structures that stand the test of time. Our team specializes in sustainable design practices and modern construction methodologies.",
    services: [
      { title: "Structural Analysis & Design", description: "Advanced structural engineering for buildings, bridges, and infrastructure using cutting-edge analysis tools." },
      { title: "Construction Management", description: "End-to-end project management ensuring on-time, on-budget delivery with quality assurance." },
      { title: "Infrastructure Development", description: "Roads, highways, water systems, and urban infrastructure planning and execution." },
      { title: "Geotechnical Engineering", description: "Soil analysis, foundation design, and ground improvement solutions." },
    ],
    industries: ["Commercial Real Estate", "Transportation", "Water & Utilities", "Government & Public Works"],
    technologies: ["AutoCAD Civil 3D", "Revit", "SAP2000", "ETABS", "Primavera P6", "BIM"],
    projects: [
      { title: "Metro Rail Extension", description: "25km elevated rail corridor with 12 stations", industry: "Transportation" },
      { title: "Commercial Tower Complex", description: "45-story mixed-use development with sustainable design", industry: "Real Estate" },
      { title: "Water Treatment Plant", description: "Municipal water treatment facility serving 500,000 residents", industry: "Utilities" },
    ],
  },
  mechanical: {
    name: "Mechanical Engineering",
    icon: Cog,
    description: "Expert mechanical engineering for manufacturing and thermal systems",
    overview: "Our Mechanical Engineering department excels in designing and optimizing mechanical systems across industries. From precision machine design to complex HVAC solutions, we bring together traditional engineering principles with modern computational tools to deliver efficient, reliable mechanical solutions.",
    services: [
      { title: "Machine Design & Development", description: "Custom machinery design, prototyping, and production support for manufacturing." },
      { title: "HVAC Systems", description: "Heating, ventilation, and air conditioning design for commercial and industrial facilities." },
      { title: "Thermal Systems Engineering", description: "Heat transfer analysis, thermal management, and energy efficiency optimization." },
      { title: "Product Development", description: "From concept to production, complete product development lifecycle support." },
    ],
    industries: ["Automotive", "Aerospace", "Manufacturing", "Building Services"],
    technologies: ["SolidWorks", "ANSYS", "MATLAB", "AutoCAD Mechanical", "CFD Software", "FEA Tools"],
    projects: [
      { title: "Automotive Assembly Line", description: "Automated production line with 40% efficiency improvement", industry: "Automotive" },
      { title: "Data Center Cooling", description: "High-efficiency cooling system for 10MW data center", industry: "Technology" },
      { title: "Industrial Ventilation", description: "Complete HVAC redesign for manufacturing facility", industry: "Manufacturing" },
    ],
  },
  electrical: {
    name: "Electrical & Electronics Engineering",
    icon: Zap,
    description: "Full-spectrum electrical and electronics engineering solutions",
    overview: "Our Electrical & Electronics Engineering department provides comprehensive solutions from power generation and distribution to sophisticated electronic system design. We specialize in both high-voltage power systems and precision electronic circuits, with a strong focus on renewable energy integration.",
    services: [
      { title: "Power Systems Design", description: "High and low voltage systems, substations, and power distribution networks." },
      { title: "Renewable Energy Solutions", description: "Solar, wind, and hybrid energy systems design and integration." },
      { title: "Electronic Circuit Design", description: "Custom PCB design, embedded systems, and electronic product development." },
      { title: "Building Electrical Systems", description: "Complete electrical infrastructure for commercial and industrial buildings." },
    ],
    industries: ["Energy & Utilities", "Manufacturing", "Commercial Buildings", "Renewable Energy"],
    technologies: ["ETAP", "SKM PowerTools", "Altium Designer", "MATLAB/Simulink", "PLC Programming", "SCADA"],
    projects: [
      { title: "Solar Farm Installation", description: "50MW solar power plant with grid integration", industry: "Renewable Energy" },
      { title: "Factory Power Upgrade", description: "Complete electrical infrastructure modernization", industry: "Manufacturing" },
      { title: "Smart Building Systems", description: "Integrated building management and automation", industry: "Commercial" },
    ],
  },
  software: {
    name: "Software & Systems Engineering",
    icon: Code,
    description: "Cutting-edge software solutions and digital transformation",
    overview: "Our Software & Systems Engineering department drives digital transformation through custom software development, system integration, and cloud solutions. We build scalable, secure, and user-friendly applications that power modern businesses and enable innovation across industries.",
    services: [
      { title: "Custom Software Development", description: "Tailored applications for web, mobile, and desktop platforms." },
      { title: "System Integration", description: "Seamless integration of disparate systems and legacy modernization." },
      { title: "Cloud Solutions", description: "Cloud architecture, migration, and managed services on AWS, Azure, and GCP." },
      { title: "Digital Platforms", description: "Enterprise platforms, portals, and collaboration tools." },
    ],
    industries: ["Technology", "Finance", "Healthcare", "Manufacturing"],
    technologies: ["React", "Node.js", "Python", "AWS", "Azure", "Kubernetes", "Docker", "AI/ML"],
    projects: [
      { title: "Enterprise ERP System", description: "Custom ERP serving 10,000+ users across 20 locations", industry: "Manufacturing" },
      { title: "Healthcare Platform", description: "Patient management system with telemedicine integration", industry: "Healthcare" },
      { title: "Financial Trading System", description: "Real-time trading platform with microsecond latency", industry: "Finance" },
    ],
  },
  mechatronics: {
    name: "Mechatronics Engineering",
    icon: Bot,
    description: "Integrated robotics and automation solutions",
    overview: "Our Mechatronics Engineering department combines mechanical, electrical, and software engineering to create intelligent automated systems. From industrial robotics to IoT solutions, we design and implement systems that improve efficiency, precision, and productivity.",
    services: [
      { title: "Robotics Systems", description: "Industrial robots, collaborative robots, and custom robotic solutions." },
      { title: "Factory Automation", description: "Complete automation solutions for manufacturing and processing." },
      { title: "Control Systems", description: "PLC programming, HMI design, and motion control systems." },
      { title: "IoT Solutions", description: "Connected devices, sensors, and industrial IoT platforms." },
    ],
    industries: ["Manufacturing", "Automotive", "Food & Beverage", "Logistics"],
    technologies: ["Siemens PLC", "Allen Bradley", "ROS", "Arduino", "Raspberry Pi", "LabVIEW", "Python"],
    projects: [
      { title: "Automated Warehouse", description: "AGV-based warehouse with 200% throughput increase", industry: "Logistics" },
      { title: "Robotic Assembly Cell", description: "Collaborative robot integration for precision assembly", industry: "Automotive" },
      { title: "Smart Factory Platform", description: "IIoT platform connecting 500+ machines", industry: "Manufacturing" },
    ],
  },
  telecommunications: {
    name: "Telecommunications Engineering",
    icon: Radio,
    description: "Advanced network and communication systems",
    overview: "Our Telecommunications Engineering department designs and implements cutting-edge communication infrastructure. From 5G networks to fiber optic systems, we deliver reliable, high-performance connectivity solutions for enterprises and telecommunications providers.",
    services: [
      { title: "Network Design & Planning", description: "Enterprise and carrier-grade network architecture and optimization." },
      { title: "Wireless Systems", description: "4G/5G, Wi-Fi, and private wireless network solutions." },
      { title: "Fiber Optic Networks", description: "Fiber infrastructure design, installation, and maintenance." },
      { title: "Unified Communications", description: "VoIP, video conferencing, and collaboration platforms." },
    ],
    industries: ["Telecommunications", "Enterprise", "Government", "Smart Cities"],
    technologies: ["Cisco", "Juniper", "Nokia", "Ericsson", "Fiber Optic Tools", "RF Planning Software"],
    projects: [
      { title: "5G Network Rollout", description: "City-wide 5G infrastructure for major telecom provider", industry: "Telecommunications" },
      { title: "Campus Network", description: "Enterprise network serving 15,000 users across 20 buildings", industry: "Education" },
      { title: "Smart City Connectivity", description: "Municipal fiber and wireless infrastructure", industry: "Government" },
    ],
  },
  industrial: {
    name: "Industrial Engineering",
    icon: Factory,
    description: "Process optimization and operational excellence",
    overview: "Our Industrial Engineering department focuses on optimizing complex systems and processes. We apply lean principles, Six Sigma methodologies, and advanced analytics to improve efficiency, reduce waste, and enhance overall operational performance.",
    services: [
      { title: "Process Optimization", description: "Workflow analysis, bottleneck elimination, and efficiency improvement." },
      { title: "Supply Chain Management", description: "End-to-end supply chain design, optimization, and logistics planning." },
      { title: "Quality Engineering", description: "Quality management systems, statistical process control, and Six Sigma." },
      { title: "Facility Planning", description: "Layout optimization, capacity planning, and ergonomics." },
    ],
    industries: ["Manufacturing", "Logistics", "Healthcare", "Retail"],
    technologies: ["SAP", "Arena Simulation", "Minitab", "Power BI", "Tableau", "Lean Tools"],
    projects: [
      { title: "Lean Transformation", description: "30% cost reduction through lean manufacturing implementation", industry: "Manufacturing" },
      { title: "Distribution Network", description: "Optimized logistics network reducing delivery time by 40%", industry: "Retail" },
      { title: "Hospital Operations", description: "Patient flow optimization reducing wait times by 50%", industry: "Healthcare" },
    ],
  },
  environmental: {
    name: "Environmental Engineering",
    icon: Leaf,
    description: "Sustainable solutions for a greener future",
    overview: "Our Environmental Engineering department develops sustainable solutions for environmental challenges. From waste management to renewable energy, we help organizations reduce their environmental footprint while meeting regulatory requirements and achieving sustainability goals.",
    services: [
      { title: "Waste Management", description: "Solid and hazardous waste management, recycling, and disposal systems." },
      { title: "Water Treatment", description: "Potable water, wastewater, and industrial water treatment solutions." },
      { title: "Air Quality Management", description: "Emissions control, air quality monitoring, and compliance." },
      { title: "Environmental Impact Assessment", description: "EIA studies, environmental monitoring, and remediation." },
    ],
    industries: ["Municipal", "Industrial", "Mining", "Construction"],
    technologies: ["GIS", "Environmental Modeling Software", "SCADA", "Lab Equipment", "Monitoring Systems"],
    projects: [
      { title: "Wastewater Treatment Plant", description: "Municipal plant treating 50 million gallons daily", industry: "Municipal" },
      { title: "Industrial Remediation", description: "Brownfield site cleanup and restoration", industry: "Industrial" },
      { title: "Zero Waste Facility", description: "Complete waste diversion system for manufacturing plant", industry: "Manufacturing" },
    ],
  },
  mining: {
    name: "Mining Engineering",
    icon: Mountain,
    description: "Resource extraction and geological engineering",
    overview: "Our Mining Engineering department provides comprehensive solutions for mineral extraction and processing. We combine geological expertise with modern mining technology to deliver safe, efficient, and environmentally responsible mining operations.",
    services: [
      { title: "Mine Planning", description: "Open pit and underground mine design, scheduling, and optimization." },
      { title: "Geological Services", description: "Resource estimation, geological modeling, and exploration support." },
      { title: "Processing Engineering", description: "Mineral processing, metallurgy, and plant design." },
      { title: "Mine Safety Systems", description: "Ventilation, ground control, and emergency response systems." },
    ],
    industries: ["Mining", "Aggregates", "Metals & Minerals", "Energy"],
    technologies: ["Surpac", "Vulcan", "GEMS", "MineSight", "Leapfrog", "FLAC3D"],
    projects: [
      { title: "Copper Mine Expansion", description: "50% capacity increase with improved recovery rates", industry: "Mining" },
      { title: "Underground Safety System", description: "Real-time monitoring and emergency response system", industry: "Mining" },
      { title: "Processing Plant", description: "New gold processing facility with 99% recovery", industry: "Metals" },
    ],
  },
  chemical: {
    name: "Chemical Engineering",
    icon: FlaskConical,
    description: "Process design and chemical manufacturing",
    overview: "Our Chemical Engineering department specializes in process design and optimization for chemical, petrochemical, and pharmaceutical industries. We combine deep process knowledge with advanced modeling tools to deliver safe, efficient, and compliant chemical processes.",
    services: [
      { title: "Process Design", description: "Complete process design, simulation, and optimization." },
      { title: "Petrochemical Engineering", description: "Refinery and petrochemical plant design and debottlenecking." },
      { title: "Pharmaceutical Engineering", description: "cGMP facility design, validation, and process development." },
      { title: "Materials Engineering", description: "Polymer, composite, and specialty materials development." },
    ],
    industries: ["Petrochemical", "Pharmaceutical", "Specialty Chemicals", "Food & Beverage"],
    technologies: ["Aspen HYSYS", "Aspen Plus", "COMSOL", "ChemCAD", "ProMax", "SuperPro Designer"],
    projects: [
      { title: "Refinery Optimization", description: "15% throughput increase with reduced energy consumption", industry: "Petrochemical" },
      { title: "Pharma Manufacturing", description: "New API manufacturing facility with FDA approval", industry: "Pharmaceutical" },
      { title: "Specialty Polymer Plant", description: "Custom polymer production line for automotive industry", industry: "Specialty Chemicals" },
    ],
  },
};

export default function DepartmentPage() {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug || !departmentData[slug]) {
    return <Navigate to="/departments" replace />;
  }

  const dept = departmentData[slug];
  const Icon = dept.icon;

  return (
    <>
      <Helmet>
        <title>{dept.name} | SynerMech Private Limited</title>
        <meta name="description" content={dept.description} />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="py-20 lg:py-28 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <Link to="/departments" className="inline-flex items-center text-sm text-muted-foreground hover:text-accent mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Departments
            </Link>
            <div className="flex items-start gap-6">
              <div className="shrink-0 w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center">
                <Icon className="w-10 h-10 text-accent" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                  {dept.name}
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl">
                  {dept.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Department Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{dept.overview}</p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Key Services & Solutions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {dept.services.map((service, index) => (
                <div key={index} className="p-6 rounded-2xl bg-card border border-border">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries & Technologies */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Industries Served</h2>
                <div className="flex flex-wrap gap-3">
                  {dept.industries.map((industry, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Tools & Technologies</h2>
                <div className="flex flex-wrap gap-3">
                  {dept.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full bg-accent/10 text-accent font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Featured Projects</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {dept.projects.map((project, index) => (
                <div key={index} className="p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-colors">
                  <span className="inline-block px-3 py-1 text-xs rounded-full bg-accent/10 text-accent mb-4">
                    {project.industry}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-hero-gradient">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Start Your {dept.name} Project?
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
              Our expert team is ready to help you with your engineering challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="xl" className="group">
                  Get in Touch
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/departments">
                <Button variant="hero-outline" size="xl">
                  View All Departments
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
