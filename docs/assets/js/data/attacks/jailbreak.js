export const jailbreakAttacks = [
{
  title: "Are aligned neural networks adversarially aligned?",
  institutions: ["Google DeepMind"],
  publication: "NeurIPS 2023",
  publishedAt: "2023-06",
  Tag: [],
  link: "https://arxiv.org/abs/2306.15447"
},
{
  title: "Visual Adversarial Examples Jailbreak Aligned Large Language Models",
  institutions: ["Princeton University"],
  publication: "AAAI 2024",
  publishedAt: "2023-06",
  Tag: [],
  link: "https://arxiv.org/abs/2306.13213"
},
{
  title: "Jailbreak in pieces: Compositional Adversarial Attacks on Multi-Modal Language Models",
  institutions: ["University of California"],
  publication: "ICLR 2024",
  publishedAt: "2023-07",
  Tag: ["Gradient-based Adversarial Attack","Single Image Modal"],
  link: "https://arxiv.org/abs/2307.14539"
},
{
  title: "Agent Smith: A Single Image Can Jailbreak One Million Multimodal LLM Agents Exponentially Fast",
  institutions: ["Sea AI Lab"],
  publication: "ICML 2024",
  publishedAt: "2024-02",
  Tag: [],
  link: "https://arxiv.org/abs/2402.08567"
},
{
  title: "FigStep: Jailbreaking Large Vision-Language Models via Typographic Visual Prompts",
  institutions: ["Tsinghua University","Zhongguancun Laboratory","Shandong Institute of Blockchain","Shandong University"],
  publication: "AAAI 2025",
  publishedAt: "2023-11",
  Tag: ["Typographic/OCR-based","Single Image Modal","Oral"],
  link: "https://arxiv.org/abs/2311.05608"
},
{
  title: "JPS: Jailbreak Multimodal Large Language Models with Collaborative Visual Perturbation and Textual Steering",
  institutions: ["Zhipu AI","Tsinghua University","Beihang University"],
  publication: "ACM MM 2025",
  publishedAt: "2025-08",
  Tag: ["Gradient-based Adversarial Attack","Image & Text Modal"],
  link: "https://arxiv.org/abs/2508.05087"
},
{
  title: "Images are Achilles' Heel of Alignment: Exploiting Visual Vulnerabilities for Jailbreaking Multimodal Large Language Models",
  institutions: ["Renmin University of China"],
  publication: "ECCV 2024",
  publishedAt: "2024-03",
  Tag: ["Generative Attack","Single Image Modal","Oral"],
  link: "https://arxiv.org/abs/2403.09792"
},
{
  title: "Playing the Fool: Jailbreaking LLMs and Multimodal LLMs with Out-of-Distribution Strategy",
  institutions: ["Korea Advanced Institute of Science and Technology"],
  publication: "CVPR 2025",
  publishedAt: "2025-03",
  Tag: ["Out-of-Distribution Exploitation","Image & Text Modal"],
  link: "https://arxiv.org/abs/2503.20823"
},
{
  title: "Distraction is All You Need for Multimodal Large Language Model Jailbreaking",
  institutions: ["Guangzhou University","Shanghai Jiao Tong University","The University of Adelaide"],
  publication: "CVPR 2025",
  publishedAt: "2025-02",
  Tag: ["Cross-Modal Attention Manipulation","Image & Text Modal"],
  link: "https://arxiv.org/abs/2502.10794"
},
{
  title: "Image Hijacks: Adversarial Images can Control Generative Models at Runtime",
  institutions: ["Harvard University", "Cambridge University", "University of California, Berkeley"],
  publication: "ICML 2024",
  publishedAt: "2023-09",
  Tag: [],
  link: "https://arxiv.org/abs/2309.00236"
},
{
  title: "Jailbreak Large Vision-Language Models Through Multi-Modal Linkage",
  institutions: ["Institute of Information Engineering", "University of Chinese Academy of Sciences", "Tsinghua University", "Shanghai Qi Zhi Institute", "University of Chicago"],
  publication: "ACL 2025",
  publishedAt: "2024-12",
  Tag: [],
  link: "https://arxiv.org/abs/2412.00473"
}, // Formatting attack + encryption + guiding the model to infer decryption
{
  title: "SceneTAP: Scene-Consistent Typographic Adversarial Planner against Vision-Language Models",
  institutions: ["Nanyang Technological University"],
  publication: "CVPR 2025",
  publishedAt: "2024-12",
  Tag: [],
  link: "https://arxiv.org/abs/2412.00114"
},
{
  title: "Jailbreaking Multimodal Large Language Models via Shuffle Inconsistency",
  institutions: ["Beihang University"],
  publication: "ICCV 2025",
  publishedAt: "2025-01",
  Tag: [],
  link: "https://arxiv.org/abs/2501.04931"
},
{
  title: "Jailbreaking MLLMs with Image-Driven Context Injection",
  institutions: ["Shanghai Artificial Intelligence Laboratory","Purdue University"],
  publication: "EMNLP 2025",
  publishedAt: "2025-07",
  Tag: [],
  link: "https://arxiv.org/abs/2507.02844"
},
// NS 3.21
{
  title: "JailBound: Jailbreaking Internal Safety Boundaries of Vision-Language Models",
  institutions: ["Shanghai Jiao Tong University"],
  publication: "NeurIPS 2025",
  publishedAt: "2025-05",
  Tag: [],
  link: "https://arxiv.org/abs/2505.19610"
}, // Probe safety boundary, then push across it while preserving semantic fidelity(attraction + direction).
{
  title: "PBI-Attack: Prior-Guided Bimodal Interactive Black-Box Jailbreak Attack for Toxicity Maximization",
  institutions: ["Alibaba Group"],
  publication: "EMNLP 2025",
  publishedAt: "2024-12",
  Tag: [],
  link: "https://arxiv.org/abs/2412.05892"
}, // Prior Perturbation Generation (Emb. + estimate) + Interactive Black-Box Attack
{
  title: "Jailbreak Vision Language Models via Bi-Modal Adversarial Prompt",
  institutions: ["Beihang University"],
  publication: "TIFS 2025",
  publishedAt: "2024-06",
  Tag: [],
  link: "https://arxiv.org/abs/2406.04031"
}, // Query-Agnostic Image Perturbing (cross-entropy)+ Intent-Specific Text Optimization
{
  title: "White-box Multimodal Jailbreaks Against Large Vision-Language Models",
  institutions: ["Fudan University"],
  publication: "MM 2024",
  publishedAt: "2024-05",
  Tag: [],
  link: "https://arxiv.org/abs/2405.17894" 
}, // Pass Adversarial Image Prefix (cross-entropy) + Greedy Coordinate Gradient
{
  title: "ImgTrojan: Jailbreaking Vision-Language Models with ONE Image",
  institution: "The University of Hong Kong",
  publication: "NAACL 2025",
  publishedAt: "2024-03",
  Tag: [],
  link: "https://aclanthology.org/2025.naacl-long.360/"
}, // Data poisoning to achieve jailbreak attacks
{
  title: "IDEATOR: Jailbreaking and Benchmarking Large Vision-Language Models Using Themselves",
  institutions: ["Fudan University"],
  publication: "ICCV 2025",
  publishedAt: "2024-10",
  Tag: [],
  link: "https://arxiv.org/abs/2411.00827"
}, // Let the large model generate image and text prompts on its own, and use a diffusion model to create images from the image prompts.
{
  title: "Arondight: Red Teaming Large Vision Language Models with Auto-generated Multi-modal Jailbreak Prompts",
  institutions: ["City University of Hong Kong"],
  publication: "MM 2024",
  publishedAt: "2024-07",
  Tag: [],
  link: "https://arxiv.org/abs/2407.15050"
},
{
  title: "Jailbreak attack with multimodal virtual scenario hypnosis for vision-language models",
  institutions: ["Zhengzhou University of Light Industry"],
  publication: "PR 2026",
  publishedAt: "2026-04",
  Tag: [],
  link: "https://doi.org/10.1016/j.patcog.2025.112391"
},
{
  title: "Con Instruction: Universal Jailbreaking of Multimodal Large Language Models via Non-Textual Modalities",
  institutions: ["Mohamed bin Zayed University of Artificial Intelligence"],
  publication: "ACL 2025",
  publishedAt: "2025-05",
  Tag: [],
  link: "https://arxiv.org/abs/2506.00548"
},
{
  title: "HiddenDetect: Detecting Jailbreak Attacks against Large Vision-Language Models via Monitoring Hidden States",
  institutions: ["The Chinese University of Hong Kong"],
  publication: "ACL 2025",
  publishedAt: "2025-02",
  Tag: [],
  link: "https://arxiv.org/abs/2502.14744"
},

{
  title: "VisCRA: A Visual Chain Reasoning Attack for Jailbreaking Multimodal Large Language Models",
  institutions: ["Huazhong University of Science and Technology"],
  publication: "EMNLP 2025",
  publishedAt: "2025-05",
  Tag: [],
  link: "https://arxiv.org/abs/2505.19684"
},
{
  title: "Exploring Visual Vulnerabilities via Multi-Loss Adversarial Search for Jailbreaking Vision-Language Models",
  institutions: ["Southeast University"],
  publication: "CVPR 2025",
  publishedAt: "2024-11",
  Tag: [],
  link: "https://arxiv.org/abs/2411.18000"
},
{
  title: "Visual Contextual Attack: Jailbreaking MLLMs with Image-Driven Context Injection",
  institutions: ["Purdue University"],
  publication: "EMNLP 2025",
  publishedAt: "2025-07",
  Tag: [],
  link: "https://arxiv.org/abs/2507.02844"
},
{
  title: "Efficient LLM-Jailbreaking via Multimodal-LLM Jailbreak",
  institutions: ["Xi'an Jiaotong University"],
  publication: "AAAI 2026",
  publishedAt: "2024-05",
  Tag: [],
  link: "https://arxiv.org/abs/2405.20015"
},
{
  title: "Immune: Improving Safety Against Jailbreaks in Multi-modal LLMs via Inference-Time Alignment",
  institutions: ["University of Maryland"],
  publication: "CVPR 2025",
  publishedAt: "2024-11",
  Tag: [],
  link: "https://arxiv.org/abs/2411.18688"
},
{
  title: "Activation Manipulation Attack: Penetrating and Harmful Jailbreak Attack Against Large Vision-Language Models",
  institutions: ["Beihang University"],
  publication: "AAAI 2026",
  publishedAt: "2026-01",
  Tag: [],
  link: "https://ojs.aaai.org/index.php/AAAI/article/view/40858"
},
{
  title: "Toward Universal and Transferable Jailbreak Attacks on Vision-Language Models",
  institutions: ["The University of Melbourne"],
  publication: "ICLR 2026",
  publishedAt: "2026-01",
  Tag: [],
  link: "https://arxiv.org/abs/2602.01025"
},
{
  title: "Steering Away from Harm: An Adaptive Approach to Defending Vision Language Model Against Jailbreaks",
  institutions: ["University of Illinois Urbana-Champaign"],
  publication: "CVPR 2025",
  publishedAt: "2024-11",
  Tag: [],
  link: "https://arxiv.org/abs/2411.16721"
},
{
  title: "Mind the Trojan Horse: Image Prompt Adapter Enabling Scalable and Deceptive Jailbreaking",
  institutions: ["Sun Yat-Sen University"],
  publication: "CVPR 2025",
  publishedAt: "2025-04",
  Tag: [],
  link: "https://arxiv.org/abs/2504.05838"
},
{
  title: "Not Just Text: Uncovering Vision Modality Typographic Threats in Image Generation Models",
  institutions: ["The Hong Kong University of Science and Technology (Guangzhou)"],
  publication: "CVPR 2025",
  publishedAt: "2024-12",
  Tag: [],
  link: "https://arxiv.org/abs/2412.05538"
},
{
  title: "Do We Really Need Curated Malicious Data for Safety Alignment in Multi-modal Large Language Models?",
  institutions: ["University of Chinese Academy of Sciences"],
  publication: "CVPR 2025",
  publishedAt: "2025-04",
  Tag: [],
  link: "https://arxiv.org/abs/2504.10000"
},
{
  title: "Heuristic-Induced Multimodal Risk Distribution Jailbreak Attack for Multimodal Large Language Models",
  institutions: ["Shenzhen Campus of Sun Yat-Sen University"],
  publication: "ICCV 2025",
  publishedAt: "2024-12",
  Tag: [],
  link: "https://arxiv.org/abs/2412.05934"
},

//
{
  title: "Towards Visualization-of-Thought Jailbreak Attack against Large Visual Language Models",
  institutions: ["Alibaba Group"],
  publication: "NeurIPS 2025",
  publishedAt: "2025-09",
  Tag: [],
  link: "https://openreview.net/forum?id=5P5YgohyBZ"
},

{
  title: "Best-of-N Jailbreaking",
  institutions: ["Speechmatics"],
  publication: "NeurIPS 2025",
  publishedAt: "2024-12",
  Tag: [],
  link: "https://arxiv.org/abs/2412.03556"
},
{
  title: "Attention! Your Vision Language Model Could Be Maliciously Manipulated",
  institutions: ["Huazhong University of Science and Technology"],
  publication: "NeurIPS 2025",
  publishedAt: "2025-05",
  Tag: [],
  link: "https://arxiv.org/abs/2505.19911"
},
//3.23
{
  title: "Adjacent Words, Divergent Intents: Jailbreaking Large Language Models via Task Concurrency",
  institutions: ["CISPA Helmholtz Center for Information Security"],
  publication: "NeurIPS 2025",
  publishedAt: "2025-10",
  Tag: ["Text"],
  link: "https://arxiv.org/abs/2510.21189"
}, // Interweave the two tasks at the word level, then jailbreak.

{
  title: "When LLM Meets DRL: Advancing Jailbreaking Efficiency via DRL-guided Search",
  institutions: ["Purdue University"],
  publication: "NeurIPS 2024",
  publishedAt: "2024-06",
  Tag: ["Text"],
  link: "https://arxiv.org/abs/2406.08705"
},

{
  title: "FlipAttack: Jailbreak LLMs via Flipping",
  institutions: ["National University of Singapore"],
  publication: "ICML 2025",
  publishedAt: "2024-10",
  Tag: ["Text", "Highly-cited"],
  link: "https://arxiv.org/abs/2410.02832"
},// Reverse the harmful prompt words before asking again

{
  title: "Weak-to-Strong Jailbreaking on Large Language Models",
  institutions: ["Carnegie Mellon University"],
  publication: "ICML 2025",
  publishedAt: "2024-01",
  Tag: ["Text", "Highly-cited"],
  link: "https://arxiv.org/abs/2401.17256"
}, //Use safe and unsafe small models to differentially adjust the large model’s output distribution probabilities.

{
  title: "Jailbreaking Leading Safety-Aligned LLMs with Simple Adaptive Attacks",
  institutions: ["EPFL"],
  publication: "ICLR 2025",
  publishedAt: "2024-04",
  Tag: ["Text", "Highly-cited"],
  link: "https://arxiv.org/abs/2404.02151"
}, // Prompt template + Random Search + Self-transfer
{
  title: "Exploring Jailbreak Attacks on LLMs through Intent Concealment and Diversion",
  institutions: ["Henan University"],
  publication: "ACL 2025 findings",
  publishedAt: "2025-05",
  Tag: ["Text"],
  link: "https://arxiv.org/abs/2505.14316"
},// Multi-step recovery + semantic expansion + inference restoration

{
  title: "M2S: Multi-turn to Single-turn jailbreak in Red Teaming for LLMs",
  institutions: ["AIM Intelligence","University of Seoul"],
  publication: "ACL 2025",
  publishedAt: "2025-03",
  Tag: [],
  link: "https://arxiv.org/abs/2503.04856"
}, // Directly stitch jailbreak attacks from multi‑turn dialogues into a single‑turn dialogue.

{
  title: "Guiding not Forcing: Enhancing the Transferability of Jailbreaking Attacks on LLMs via Removing Superfluous Constraints",
  institutions: ["Tsinghua University"],
  publication: "ACL 2025",
  publishedAt: "2025-02",
  Tag: [],
  link: "https://arxiv.org/abs/2503.01865"
},//Relax the restrictions on optimization methods
]; 
