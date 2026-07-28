import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import {
  Building2,
  Zap,
  Droplets,
  Wind,
  Flame,
  Paintbrush,
  Layers3,
  Hammer,
  BrickWall,
  TreePine,
  HardHat,
  Cable,
  ShieldCheck,
  CheckCircle
} from "lucide-react";

const Trades = ({ onRequestQuote }) => {
  const trades = [
    {
      icon: Building2,
      title: "General Contracting",
      description:
        "Complete construction estimating for residential, commercial, and industrial projects.",
      services: [
        "Full quantity takeoffs",
        "Labor and material pricing",
        "CSI division breakdown",
        "Bid proposal support"
      ]
    },
    {
      icon: Zap,
      title: "Electrical",
      description:
        "Accurate electrical takeoffs covering power, lighting, distribution, and associated systems.",
      services: [
        "Lighting and controls",
        "Power distribution",
        "Panels and feeders",
        "Branch wiring"
      ]
    },
    {
      icon: Droplets,
      title: "Plumbing",
      description:
        "Detailed plumbing estimates for fixtures, piping, equipment, and related accessories.",
      services: [
        "Domestic water piping",
        "Sanitary and vent piping",
        "Plumbing fixtures",
        "Equipment connections"
      ]
    },
    {
      icon: Wind,
      title: "HVAC & Mechanical",
      description:
        "Comprehensive HVAC and mechanical estimating for equipment, ductwork, and piping systems.",
      services: [
        "Ductwork takeoffs",
        "HVAC equipment",
        "Mechanical piping",
        "Insulation and accessories"
      ]
    },
    {
      icon: Flame,
      title: "Fire Protection",
      description:
        "Fire sprinkler and protection system takeoffs prepared from plans and specifications.",
      services: [
        "Sprinkler piping",
        "Heads and fittings",
        "Valves and equipment",
        "Fire protection accessories"
      ]
    },
    {
      icon: Cable,
      title: "Low Voltage",
      description:
        "Structured cabling and low-voltage takeoffs for communication and safety systems.",
      services: [
        "Data and telecom",
        "Fire alarm systems",
        "Security systems",
        "Audio visual systems"
      ]
    },
    {
      icon: Hammer,
      title: "Carpentry & Millwork",
      description:
        "Precise takeoffs for rough carpentry, finish carpentry, casework, and millwork.",
      services: [
        "Wood framing",
        "Blocking and backing",
        "Cabinetry and casework",
        "Finish carpentry"
      ]
    },
    {
      icon: BrickWall,
      title: "Concrete & Masonry",
      description:
        "Quantity takeoffs for concrete, masonry, reinforcement, foundations, and structural work.",
      services: [
        "Concrete foundations",
        "Slabs and walls",
        "Reinforcing steel",
        "Brick and block masonry"
      ]
    },
    {
      icon: Layers3,
      title: "Drywall & Flooring",
      description:
        "Detailed interior finish estimates covering drywall, ceilings, flooring, and related work.",
      services: [
        "Drywall assemblies",
        "Acoustic ceilings",
        "Floor finishes",
        "Wall finishes"
      ]
    },
    {
      icon: Paintbrush,
      title: "Painting & Coatings",
      description:
        "Area-based estimating for interior and exterior painting, coatings, and surface preparation.",
      services: [
        "Interior painting",
        "Exterior coatings",
        "Surface preparation",
        "Specialty finishes"
      ]
    },
    {
      icon: TreePine,
      title: "Sitework & Landscaping",
      description:
        "Complete site development estimating for grading, paving, utilities, and landscaping.",
      services: [
        "Earthwork and excavation",
        "Asphalt and concrete paving",
        "Site utilities",
        "Landscape installation"
      ]
    },
    {
      icon: HardHat,
      title: "Demolition",
      description:
        "Detailed demolition takeoffs for selective, interior, structural, and site demolition.",
      services: [
        "Interior demolition",
        "Structural demolition",
        "Site removals",
        "Disposal quantities"
      ]
    }
  ];

  return _jsxs("div", {
    children: [
      _jsx("section", {
        className:
          "bg-gradient-to-br from-green-50 to-blue-50 py-20",
        children: _jsx("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: _jsxs("div", {
            className: "text-center animate-slideInUp",
            children: [
              _jsxs("div", {
                className:
                  "inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6",
                children: [
                  _jsx(ShieldCheck, {
                    className: "h-4 w-4 mr-2"
                  }),
                  "Complete Trade Coverage"
                ]
              }),
              _jsx("h1", {
                className:
                  "text-5xl lg:text-6xl font-bold text-gray-900 mb-6",
                children: "Construction Trades We Estimate"
              }),
              _jsx("p", {
                className:
                  "text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed",
                children:
                  "From complete general contracting estimates to individual trade takeoffs, our estimating team supports contractors across residential, commercial, and industrial construction."
              })
            ]
          })
        })
      }),

      _jsx("section", {
        className: "py-20 bg-white",
        children: _jsxs("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            _jsxs("div", {
              className: "text-center mb-16",
              children: [
                _jsx("h2", {
                  className:
                    "text-4xl font-bold text-gray-900 mb-5",
                  children: "Our Trade Estimating Services"
                }),
                _jsx("p", {
                  className:
                    "text-lg text-gray-600 max-w-3xl mx-auto",
                  children:
                    "Each estimate includes clearly organized quantities, labor, material, equipment, and marked-up drawings based on your project requirements."
                })
              ]
            }),

            _jsx("div", {
              className:
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
              children: trades.map((trade, index) =>
                _jsxs(
                  "article",
                  {
                    className:
                      "bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-slideUp",
                    style: {
                      animationDelay: `${index * 0.08}s`
                    },
                    children: [
                      _jsx("div", {
                        className:
                          "w-14 h-14 bg-gradient-to-r from-green-100 to-blue-100 rounded-xl flex items-center justify-center mb-6",
                        children: _jsx(trade.icon, {
                          className: "h-7 w-7 text-green-600"
                        })
                      }),
                      _jsx("h3", {
                        className:
                          "text-xl font-bold text-gray-900 mb-3",
                        children: trade.title
                      }),
                      _jsx("p", {
                        className:
                          "text-gray-600 leading-relaxed mb-6",
                        children: trade.description
                      }),
                      _jsx("div", {
                        className: "space-y-3",
                        children: trade.services.map(
                          (service, serviceIndex) =>
                            _jsxs(
                              "div",
                              {
                                className:
                                  "flex items-start space-x-3",
                                children: [
                                  _jsx(CheckCircle, {
                                    className:
                                      "h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"
                                  }),
                                  _jsx("span", {
                                    className:
                                      "text-sm text-gray-700",
                                    children: service
                                  })
                                ]
                              },
                              serviceIndex
                            )
                        )
                      })
                    ]
                  },
                  trade.title
                )
              )
            })
          ]
        })
      }),

      _jsx("section", {
        className:
          "py-20 bg-gradient-to-br from-gray-50 to-green-50",
        children: _jsxs("div", {
          className:
            "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
          children: [
            _jsx("h2", {
              className:
                "text-4xl font-bold text-gray-900 mb-6",
              children: "Do You Need a Custom Trade Estimate?"
            }),
            _jsx("p", {
              className:
                "text-xl text-gray-600 max-w-3xl mx-auto mb-10",
              children:
                "Send us your drawings and specifications. We will review the project scope and provide a clear quote and turnaround time."
            }),
            _jsx("button", {
              onClick: onRequestQuote,
              className:
                "inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl",
              children: "Request a Free Quote"
            })
          ]
        })
      })
    ]
  });
};

export default Trades;
