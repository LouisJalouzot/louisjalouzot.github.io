---
title: Chen et al. 2025 - Sudden
paperTitle: "Sudden Drops in the Loss: Syntax Acquisition, Phase Transitions, and Simplicity Bias in MLMs"
authors:
  - Chen, Angelica,Shwartz-Ziv, Ravid,Cho, Kyunghyun,Leavitt, Matthew L.,Saphra, Naomi
publish: true
cssclasses:
  - list-cards
type:
  - annotation
project: 
tags:
  - LLM/BERT
  - LanguageAcquisition
  - Syntax
status: read
progress: annotated
---
# Annotation for [Chen et al. 2025 - Sudden](Papers/References/Chen%20et%20al.%202025%20-%20Sudden)

> [!abstract] Sudden Drops in the Loss: Syntax Acquisition, Phase Transitions, and Simplicity Bias in MLMs

> [!example]- Authors
> - [Chen, Angelica](Chen%2C%20Angelica)
> - [Shwartz-Ziv, Ravid](Shwartz-Ziv%2C%20Ravid)
> - [Cho, Kyunghyun](Cho%2C%20Kyunghyun)
> - [Leavitt, Matthew L.](Leavitt%2C%20Matthew%20L.)
> - [Saphra, Naomi](Saphra%2C%20Naomi)

**Year:** 2025
**DOI:** 10.48550/arXiv.2309.07311
**URL:** http://arxiv.org/abs/2309.07311
**PDF:** [Chen et al. 2025 - Sudden](Papers/PDFs/Chen%20et%20al.%202025%20-%20Sudden%20Drops%20in%20the%20Loss%20Syntax%20Acquisition%20Phase%20Transitions%20and%20Simplicity%20Bias%20in%20MLMs.pdf)

# Highlights


# Goal (yellow)


# Method (purple)


# Data (purple)


# Results (red)


# Discussion (blue)


# Questions


# AI Summary
This paper, "Sudden Drops in the Loss: Syntax Acquisition, Phase Transitions, and Simplicity Bias in MLMs," investigates the training trajectory of masked language models (MLMs) to understand how linguistic capabilities emerge, moving beyond analyses of only fully trained models. The authors focus on Syntactic Attention Structure (SAS), a naturally emerging property in MLMs where Transformer heads specialize in specific syntactic relations.

The core contributions of the paper include:

- **Identification of Phase Transitions**: The study identifies a "precipitous loss drop" in BERTBase training, occurring consistently within 20K-30K timesteps, which is composed of multiple phase transitions relating to various linguistic abilities.
    
    - **Structure Onset**: A brief window in pretraining where models abruptly acquire SAS, concurrent with a steep drop in loss and a spike in Unlabeled Attachment Score (UAS).
        
    - **Capabilities Onset**: Immediately following the SAS spike, the model begins to handle complex linguistic phenomena correctly, signaled by a "break" in the BLIMP score (a benchmark for evaluating knowledge of grammatical phenomena). This suggests that the internal representation of grammar (SAS) precipitates the external observation of grammatical behavior.
        
- **Causal Role of SAS**: By introducing a syntactic regularizer to manipulate SAS during training, the authors demonstrate that SAS is necessary for the development of grammatical capabilities and handling complex linguistic phenomena. Suppressing SAS prevents the emergence of linguistically complex capabilities.
    
- **Competition with Alternative Strategies**: The research reveals that SAS competes with an alternative learning strategy. Briefly suppressing SAS early in training (e.g., BERTSAS−(3k)​) can improve model quality and accelerate convergence, outperforming baseline BERT models. However, suppressing SAS for too long or changing the regularizer during the "alternative strategy onset" (an early phase transition in MLM loss) can damage performance and block long-term SAS development.
    
- **Simplicity Bias and Training Dynamics**: These findings offer an interpretation of simplicity bias, where simpler functions like SAS are favored earlier in training, and breakthrough training dynamics. The paper suggests that human-interpretable structures, like SAS, can act as a disadvantageously strong prior if learned too early, potentially impeding the acquisition of more effective, complex strategies.
    

The study emphasizes the importance of a "developmental analysis" approach, which considers a model's training history, as a critical lens for understanding emergent behaviors in deep learning. The authors also discuss implications for deep learning phenomena, including the idea that abrupt changes (phase transitions) may occur at critical points during training where optimizer missteps can significantly damage model performance.