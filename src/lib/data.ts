// EDA MCP Servers Data

export interface MCPServer {
  id: string;
  name: string;
  author: string;
  category: string;
  description: string;
  tags: string[];
  githubUrl: string;
  installCommand: string;
  config: Record<string, unknown>;
  features: string[];
  dateAdded: string;
  stars: number;
  highlighted?: boolean;
}

export const mcpServers: MCPServer[] = [
    {
        id: "arcas-onlineeda",
        name: "Arcas OnlineEDA MCP",
        author: "ssql2014",
        category: "Verification",
        description: "Web automation capabilities for Electronic Design Automation (EDA) platforms. Enables programmatic interaction with verification and design tools through a structured API.",
        tags: ["verification", "formal-verification", "equivalence-checking", "power-analysis", "security", "fpga", "automation", "web-automation"],
        githubUrl: "https://github.com/ssql2014/arcas-onlineeda-mcp",
        installCommand: "git clone https://github.com/ssql2014/arcas-onlineeda-mcp.git && cd arcas-onlineeda-mcp && npm install && npm run build",
        config: {
            "arcas-onlineeda": {
                "command": "node",
                "args": ["/path/to/arcas-onlineeda-mcp/dist/index.js"]
            }
        },
        features: [
            "Project management - Create and manage EDA projects programmatically",
            "File operations - Upload design files (Verilog, VHDL, SystemVerilog, etc.)",
            "Formal verification execution",
            "Equivalence checking capabilities",
            "Power analysis automation",
            "Security verification workflows",
            "FPGA verification support",
            "Natural language interface for EDA tasks",
            "Platform navigation automation",
            "Integration with CI/CD pipelines"
        ],
        dateAdded: "2025-07-05",
        stars: 0,
        highlighted: true
    },
    {
        id: "gtkwave-mcp",
        name: "GTKWave MCP Server",
        author: "mcp4eda",
        category: "Simulation Visualization",
        description: "Programmatic access to GTKWave's waveform viewing and analysis capabilities for automated EDA workflows. Supports multiple formats and timing analysis.",
        tags: ["gtkwave", "waveform", "vcd", "fst", "simulation", "visualization", "timing", "analysis"],
        githubUrl: "https://github.com/ssql2014/mcp4eda/tree/main/gtkwave-mcp",
        installCommand: "git clone https://github.com/ssql2014/mcp4eda.git && cd mcp4eda/gtkwave-mcp && npm install && npm run build",
        config: {
            "gtkwave": {
                "command": "node",
                "args": ["/path/to/mcp4eda/gtkwave-mcp/dist/index.js"],
                "env": {
                    "GTKWAVE_PATH": "/usr/local/bin/gtkwave",
                    "LOG_LEVEL": "info"
                }
            }
        },
        features: [
            "Open and display multiple waveform formats (VCD, FST, LXT2)",
            "Convert between waveform formats with compression support",
            "Extract signal hierarchies with pattern matching",
            "Perform timing measurements and analysis",
            "Generate TCL scripts for automated workflows",
            "Capture high-quality waveform screenshots",
            "Background mode operation for CI/CD integration",
            "Support for GTKWave save files (.gtkw)"
        ],
        dateAdded: "2025-06-15",
        stars: 156
    },
    {
        id: "anysilicon-die-calculator",
        name: "AnySilicon Die Calculator",
        author: "AnySilicon",
        category: "Manufacturing",
        description: "Web scrapes the AnySilicon online calculator to compute dies per wafer. Provides accurate calculations through MCP interface using the latest AnySilicon calculation logic.",
        tags: ["die-per-wafer", "yield", "manufacturing", "wafer"],
        githubUrl: "https://github.com/ssql2014/mcp4eda/tree/main/anysilicon",
        installCommand: "git clone https://github.com/ssql2014/mcp4eda.git && cd mcp4eda/anysilicon && npm install && npm run build",
        config: {
            "anysilicon": {
                "command": "node",
                "args": ["/path/to/mcp4eda/anysilicon/dist/index.js"]
            }
        },
        features: [
            "Uses official AnySilicon online calculator via web scraping",
            "Always provides latest calculation logic from AnySilicon",
            "Supports 200mm and 300mm wafer sizes",
            "Returns total dies, wafer area, and utilization percentage",
            "No need to reverse-engineer calculation formulas"
        ],
        dateAdded: "2024-12-20",
        stars: 245
    },
    {
        id: "verible-mcp",
        name: "Verible MCP Server",
        author: "mcp4eda",
        category: "Design Entry",
        description: "Comprehensive SystemVerilog/Verilog tools suite via Verible. Provides linting, formatting, syntax analysis, register analysis, project analysis, and more through a single MCP interface.",
        tags: ["verilog", "systemverilog", "verible", "lint", "format", "analysis", "rtl"],
        githubUrl: "https://github.com/ssql2014/mcp4eda/tree/main/verible-mcp",
        installCommand: "git clone https://github.com/ssql2014/mcp4eda.git && cd mcp4eda/verible-mcp && npm install && npm run build",
        config: {
            "verible": {
                "command": "node",
                "args": ["/path/to/mcp4eda/verible-mcp/dist/index.js"]
            }
        },
        features: [
            "Style linting with configurable rules and automatic fixing",
            "Code formatting with customizable indentation and line length",
            "Syntax parsing with AST visualization and JSON export",
            "Register and module analysis with flip-flop detection",
            "Project-level analysis with symbol tables and dependencies",
            "Syntax-aware file comparison and code obfuscation",
            "Natural language interface for all tools",
            "Intelligent caching for improved performance"
        ],
        dateAdded: "2024-12-24",
        stars: 1234
    },
    {
        id: "semiconductor-supply-chain",
        name: "Semiconductor Supply Chain MCP",
        author: "ssql2014",
        category: "IP Management",
        description: "An intelligent agent for IP core and ASIC service procurement. Provides structured access to semiconductor industry B2B platforms for finding vendors, comparing services, and getting price estimations.",
        tags: ["ip-core", "asic", "procurement", "b2b", "supply-chain", "vendor-comparison"],
        githubUrl: "https://github.com/ssql2014/mcp4eda/tree/main/semiconductor-supply-chain-mcp",
        installCommand: "git clone https://github.com/ssql2014/mcp4eda.git && cd mcp4eda/semiconductor-supply-chain-mcp && npm install && npm run build",
        config: {
            "semiconductor-supply-chain": {
                "command": "node",
                "args": ["/path/to/mcp4eda/semiconductor-supply-chain-mcp/dist/index.js"]
            }
        },
        features: [
            "Find IP vendors by category, technology, and requirements",
            "Locate ASIC design and manufacturing services",
            "Get price estimations for semiconductor services",
            "Compare multiple vendors with customizable criteria",
            "Natural language queries for complex search requirements",
            "Support for various technology nodes and foundries",
            "Filter by power requirements and process nodes"
        ],
        dateAdded: "2025-01-24",
        stars: 89
    },
    {
        id: "yosys-mcp",
        name: "Yosys MCP Server",
        author: "mcp4eda",
        category: "Synthesis",
        description: "A Model Context Protocol server providing Yosys synthesis and analysis capabilities for Verilog/SystemVerilog designs. Supports multiple FPGA/ASIC targets with visualization capabilities.",
        tags: ["yosys", "synthesis", "verilog", "systemverilog", "fpga", "asic", "rtl", "netlist"],
        githubUrl: "https://github.com/ssql2014/mcp4eda/tree/main/yosys-mcp",
        installCommand: "git clone https://github.com/ssql2014/mcp4eda.git && cd mcp4eda/yosys-mcp && npm install && npm run build",
        config: {
            "yosys": {
                "command": "node",
                "args": ["/path/to/mcp4eda/yosys-mcp/dist/index.js"],
                "env": {
                    "YOSYS_PATH": "/usr/local/bin/yosys",
                    "YOSYS_DEFAULT_TARGET": "generic",
                    "YOSYS_OPT_LEVEL": "2"
                }
            }
        },
        features: [
            "Synthesis to gate-level netlists for various targets (Xilinx, Intel/Altera, Lattice iCE40/ECP5)",
            "Design statistics, hierarchy analysis, and resource estimation",
            "Visual circuit diagrams generation using Graphviz",
            "Intelligent result caching for improved performance",
            "Support for optimization levels and custom synthesis flows",
            "Multiple output formats: Verilog, JSON, BLIF, EDIF",
            "Configurable technology mapping and optimization"
        ],
        dateAdded: "2025-01-24",
        stars: 567
    },
    {
        id: "verilator-mcp",
        name: "Verilator MCP Server",
        author: "mcp4eda",
        category: "Simulation",
        description: "An intelligent hardware verification tool that provides automatic testbench generation, smart simulation with dependency management, and natural language queries about simulations.",
        tags: ["verilator", "simulation", "verification", "testbench", "verilog", "systemverilog", "coverage", "waveform"],
        githubUrl: "https://github.com/ssql2014/mcp4eda/tree/main/verilator-mcp",
        installCommand: "git clone https://github.com/ssql2014/mcp4eda.git && cd mcp4eda/verilator-mcp && npm install && npm run build",
        config: {
            "verilator": {
                "command": "node",
                "args": ["/path/to/mcp4eda/verilator-mcp/dist/index.js"],
                "env": {
                    "VERILATOR_PATH": "/usr/local/bin/verilator",
                    "LOG_LEVEL": "info"
                }
            }
        },
        features: [
            "Automatic testbench generation with intelligent test scenarios",
            "Smart simulation with dependency management and optimization",
            "Natural language queries about simulation results and debugging",
            "Waveform analysis and visualization support",
            "Code coverage collection and analysis",
            "Protocol-aware testing templates (AXI, APB, etc.)",
            "AI-powered hardware design understanding and debugging assistance"
        ],
        dateAdded: "2025-01-24",
        stars: 892
    },
    {
        id: "klayout-mcp",
        name: "KLayout MCP Server",
        author: "mcp4eda",
        category: "Physical Design",
        description: "Comprehensive IC layout viewer and editor with DRC, LVS, and scripting capabilities. Supports multiple formats including GDS, OASIS, DXF, and more.",
        tags: ["klayout", "layout", "gds", "oasis", "drc", "lvs", "physical-design", "ic-design"],
        githubUrl: "https://github.com/ssql2014/mcp4eda/tree/main/klayout-mcp",
        installCommand: "git clone https://github.com/ssql2014/mcp4eda.git && cd mcp4eda/klayout-mcp && npm install && npm run build",
        config: {
            "klayout": {
                "command": "node",
                "args": ["/path/to/mcp4eda/klayout-mcp/dist/index.js"],
                "env": {
                    "KLAYOUT_PATH": "/usr/local/bin/klayout",
                    "LOG_LEVEL": "info"
                }
            }
        },
        features: [
            "Analyze layout files with cell hierarchy and layer information",
            "Convert between GDS, OASIS, DXF, CIF, MAG, DEF/LEF formats",
            "Execute design rule checks with KLayout's powerful DRC engine",
            "Extract specific layers with shape merging and hierarchy flattening",
            "Run custom Python/Ruby scripts with full KLayout API access",
            "Natural language interface for intuitive layout operations",
            "Rich resource library with DRC templates and analysis scripts",
            "Intelligent caching for improved performance"
        ],
        dateAdded: "2025-01-26",
        stars: 2345
    },
    {
        id: "openlane-mcp",
        name: "OpenLane MCP Server",
        author: "mcp4eda",
        category: "Physical Design",
        description: "Complete RTL to GDSII flow automation with Container Desktop support. Provides synthesis, floorplanning, placement, CTS, routing, and GDSII generation through OpenLane.",
        tags: ["openlane", "rtl-to-gdsii", "synthesis", "placement", "routing", "cts", "physical-design", "asic", "docker", "container"],
        githubUrl: "https://github.com/ssql2014/mcp4eda/tree/main/openlane-mcp",
        installCommand: "git clone https://github.com/ssql2014/mcp4eda.git && cd mcp4eda/openlane-mcp && npm install && npm run build",
        config: {
            "openlane": {
                "command": "node",
                "args": ["/path/to/mcp4eda/openlane-mcp/dist/index.js"],
                "env": {
                    "CONTAINER_EXECUTABLE": "docker",
                    "OPENLANE_IMAGE": "efabless/openlane:latest",
                    "WORK_DIR": "/home/user/openlane-workspace",
                    "LOG_LEVEL": "info"
                }
            }
        },
        features: [
            "Complete RTL to GDSII flow with single command",
            "Individual stage control for synthesis, floorplan, placement, CTS, routing",
            "Container-based execution supporting Docker, Podman, and Container Desktop",
            "Multi-PDK support including SkyWater, GF, and custom PDKs",
            "Natural language interface for complex flow operations",
            "Design configuration validation and checking",
            "Comprehensive flow reports and statistics generation",
            "Resource library with flow documentation and best practices"
        ],
        dateAdded: "2025-01-26",
        stars: 412
    },
    {
        id: "cbmc-mcp",
        name: "CBMC MCP Server",
        author: "mcp4eda",
        category: "Verification",
        description: "Bounded Model Checking for C/C++ programs. Provides formal verification capabilities to detect bugs like buffer overflows, null pointer dereferences, arithmetic overflows, and assertion violations.",
        tags: ["cbmc", "formal-verification", "model-checking", "c", "c++", "safety", "security", "assertions"],
        githubUrl: "https://github.com/ssql2014/mcp4eda/tree/main/cbmc-mcp",
        installCommand: "git clone https://github.com/ssql2014/mcp4eda.git && cd mcp4eda/cbmc-mcp && npm install && npm run build",
        config: {
            "cbmc": {
                "command": "node",
                "args": ["/path/to/mcp4eda/cbmc-mcp/dist/index.js"],
                "env": {
                    "CBMC_PATH": "/usr/local/bin/cbmc",
                    "LOG_LEVEL": "info"
                }
            }
        },
        features: [
            "Verify C/C++ code for assertions and safety properties",
            "Detect buffer overflows and array bounds violations",
            "Check for null pointer dereferences",
            "Identify arithmetic overflows and underflows",
            "Verify division by zero conditions",
            "Check function equivalence between implementations",
            "Support for loop unwinding with configurable bounds",
            "Generate counterexample traces for debugging",
            "Natural language interface for verification queries"
        ],
        dateAdded: "2025-01-27",
        stars: 178
    },
    {
        id: "c2rtl-verify-mcp",
        name: "C2RTL Verify MCP",
        author: "mcp4eda",
        category: "Verification",
        description: "High-level synthesis verification tool that converts C/C++ code to RTL and performs equivalence checking. Enables verification of hardware implementations against their C/C++ specifications.",
        tags: ["c2rtl", "high-level-synthesis", "hls", "verification", "equivalence-checking", "c", "c++", "rtl", "verilog"],
        githubUrl: "https://github.com/ssql2014/mcp4eda/tree/main/c2rtl-verify-mcp",
        installCommand: "git clone https://github.com/ssql2014/mcp4eda.git && cd mcp4eda/c2rtl-verify-mcp && npm install && npm run build",
        config: {
            "c2rtl-verify": {
                "command": "node",
                "args": ["/path/to/mcp4eda/c2rtl-verify-mcp/dist/index.js"],
                "env": {
                    "C2RTL_PATH": "/usr/local/bin/c2rtl",
                    "LOG_LEVEL": "info"
                }
            }
        },
        features: [
            "Convert C/C++ code to synthesizable RTL (Verilog/SystemVerilog)",
            "Perform equivalence checking between C model and RTL implementation",
            "Support for various C constructs including loops, arrays, and pointers",
            "Automatic testbench generation for verification",
            "Bit-accurate verification with configurable precision",
            "Support for fixed-point and floating-point operations",
            "Integration with formal verification tools",
            "Performance analysis and optimization suggestions",
            "Natural language interface for HLS verification queries"
        ],
        dateAdded: "2025-01-27",
        stars: 234
    }
];

// Categories definition
export const categories = [
    { id: "design-entry", name: "Design Entry", count: 0 },
    { id: "simulation", name: "Simulation", count: 0 },
    { id: "simulation-visualization", name: "Simulation Visualization", count: 0 },
    { id: "synthesis", name: "Synthesis", count: 0 },
    { id: "physical-design", name: "Physical Design", count: 0 },
    { id: "timing-analysis", name: "Timing Analysis", count: 0 },
    { id: "power-analysis", name: "Power Analysis", count: 0 },
    { id: "verification", name: "Verification", count: 0 },
    { id: "manufacturing", name: "Manufacturing", count: 0 },
    { id: "pdk-technology", name: "PDK/Technology", count: 0 },
    { id: "test", name: "Test", count: 0 },
    { id: "ip-management", name: "IP Management", count: 0 },
    { id: "utilities", name: "Utilities", count: 0 }
];

// Calculate category counts
mcpServers.forEach(server => {
    const category = categories.find(c => 
        c.name.toLowerCase() === server.category.toLowerCase() ||
        c.id === server.category.toLowerCase().replace(/[\s\/]/g, '-')
    );
    if (category) {
        category.count++;
    }
});