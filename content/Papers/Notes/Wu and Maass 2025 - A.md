---
title: Wu and Maass 2025 - A
paperTitle: "A simple model for Behavioral Time Scale Synaptic Plasticity (BTSP) provides content addressable memory with binary synapses and one-shot learning"
authors: Wu, Yujie,Maass, Wolfgang
publish: true
cssclasses:
  - list-cards
type: annotation
project:
tags:
status: to read
progress: to annotate
---
# Annotation for [Wu and Maass 2025 - A](Papers/References/Wu%20and%20Maass%202025%20-%20A)

> [!abstract] A simple model for Behavioral Time Scale Synaptic Plasticity (BTSP) provides content addressable memory with binary synapses and one-shot learning

> [!example]- Authors
> - [Wu, Yujie](Wu%2C%20Yujie)
> - [Maass, Wolfgang](Maass%2C%20Wolfgang)

**Year:** 2025
**DOI:** 10.1038/s41467-024-55563-6
**URL:** https://www.nature.com/articles/s41467-024-55563-6
**PDF:** [Wu and Maass 2025 - A](Papers/PDFs/Wu%20and%20Maass%202025%20-%20A%20simple%20model%20for%20Behavioral%20Time%20Scale%20Synaptic%20Plasticity%20(BTSP)%20provides%20content%20addressable%20memory%20with%20binary%20synapses%20and%20one-shot%20learning.pdf)

# Highlights


# Goal (yellow)


# Method (purple)


# Data (purple)


# Results (red)


# Discussion (blue)


# Questions


# AI Summary
This paper, "A simple model for Behavioral Time Scale Synaptic Plasticity (BTSP) provides content addressable memory with binary synapses and one-shot learning," introduces a transparent and analytically tractable model for Behavioral Time Scale Synaptic Plasticity (BTSP) observed in area CA1 of the mammalian brain. This model sheds light on how one-shot learning can create content-addressable memory (CAM) with binary synapses and offers a departure from traditional synaptic plasticity rules like Hebbian learning and Spike-Timing-Dependent Plasticity (STDP).

**Key Aspects of BTSP and the Model:**

- **Distinct Plasticity Rule:** Unlike STDP or Hebbian rules, BTSP does not depend on postsynaptic neuron firing. Instead, it is gated by stochastic synaptic input, specifically plateau potentials from the entorhinal cortex (EC), which open a plasticity window lasting several seconds. This allows for the integration of temporally dispersed information into static memory traces.
    
- **One-Shot Learning and Binary Weights:** The model demonstrates that BTSP facilitates one-shot learning, enabling the instantaneous creation of memory traces in a single or few trials. Crucially, it achieves high-capacity CAM using only binary synaptic weights (0 or 1), a significant advantage over Hopfield Networks (HFNs) that typically require continuous weights for high capacity. The use of binary weights also makes the model more amenable to neuromorphic hardware implementations.
    
- **Repulsion Effect in Memory:** The model successfully reproduces the "repulsion effect" observed in human memory, where traces for similar memory items are actively pulled apart. This effect, which was previously unreproduced by HFNs or other learning rules, enhances differential downstream processing of closely related memories. The Long-Term Depression (LTD) component of BTSP plays a crucial role in this phenomenon.
    
- **Role of Stochastic Gating Signal (fq):** The probability of a plateau potential (fq​) is identified as a critical parameter unique to BTSP. Theoretical analysis and numerical simulations show that the experimentally observed value of fq​≈0.005 is near-optimal for memory system performance, balancing memory trace size and recall efficiency. The seconds-long plasticity window of BTSP is essential for achieving this optimal fq​ value.
    
- **Comparison to Other Models:**
    - **Hopfield Networks (HFNs):** While HFNs often require continuous weights for high memory capacity, the BTSP model with binary weights achieves comparable, and in some cases superior, performance. Additionally, BTSP offers instant memory recall, whereas HFNs require multiple iterations to converge to an attractor.
        
    - **Fly Algorithm (Random Projections):** BTSP is presented as an advancement over the "fly algorithm" or random projections. Unlike random projections, which are fixed, BTSP creates a "custom-made" random projection through learning for specific input patterns and can be continuously extended. This enables BTSP to form attractors that support stable recall from partial cues and overcome limitations of the fly algorithm regarding large neural systems (e.g., no requirement for a 40-times larger neural population or global winner-take-all competition).
        

**Methodology and Implications:**

The study utilizes a combination of theoretical analysis and numerical simulations to validate the properties of the simplified BTSP rule. The findings link synaptic plasticity in the hippocampus (CA1) to its network function in memory formation. Furthermore, the simplicity of the BTSP rule, especially with binary weights, makes it highly promising for implementing energy-efficient, large-scale content-addressable memories with on-chip learning capabilities in neuromorphic hardware using memristor arrays.

The paper's data and source code are publicly available.