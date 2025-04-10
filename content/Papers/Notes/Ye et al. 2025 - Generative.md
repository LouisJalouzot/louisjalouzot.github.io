---
title: Ye et al. 2025 - Generative
paperTitle: Generative language reconstruction from brain recordings
authors:
  - Ye, Ziyi,Ai, Qingyao,Liu, Yiqun,De Rijke, Maarten,Zhang, Min,Lioma, Christina,Ruotsalo, Tuukka
publish: true
cssclasses:
  - list-cards
type:
  - annotation
project:
  - Decoding
tags:
  - Decoding
  - Representations
  - LLM/Llama
  - LLM/GPT
  - Prompt
  - LeBel
  - Dataset/fMRI/Pereira
  - Dataset/fMRI/LeBel
  - Dataset/fMRI/Narratives
  - Speech
  - Dataset/fMRI
status: read
progress: annotated
---
# Annotation for [Ye et al. 2025 - Generative](Papers/References/Ye%20et%20al.%202025%20-%20Generative)

> [!abstract] Generative language reconstruction from brain recordings

> [!example]- Authors
> - [Ye, Ziyi](Ye%2C%20Ziyi)
> - [Ai, Qingyao](Ai%2C%20Qingyao)
> - [Liu, Yiqun](Liu%2C%20Yiqun)
> - [De Rijke, Maarten](De%20Rijke%2C%20Maarten)
> - [Zhang, Min](Zhang%2C%20Min)
> - [Lioma, Christina](Lioma%2C%20Christina)
> - [Ruotsalo, Tuukka](Ruotsalo%2C%20Tuukka)

**Year:** 2025
**DOI:** 10.1038/s42003-025-07731-7
**URL:** https://www.nature.com/articles/s42003-025-07731-7
**PDF:** [Ye et al. 2025 - Generative](Papers/PDFs/Ye%20et%20al.%202025%20-%20Generative%20language%20reconstruction%20from%20brain%20recordings.pdf)

# Highlights

Very related to [[Decoding]], could serve as baseline

# Goal (yellow)


> [!PDF|yellow] [[Ye et al. 2025 - Generative language reconstruction from brain recordings.pdf#page=1&selection=44,52,46,70&color=yellow|Ye et al. 2025 - Generative language reconstruction from brain recordings, p.1]]
> >  language reconstruction through autoregressive generation, which directly uses the representation decoded from functional magnetic resonance imaging (fMRI) as the input for a large language model (LLM)


# Method (purple)


> [!PDF|important] [[Ye et al. 2025 - Generative language reconstruction from brain recordings.pdf#page=2&selection=35,8,40,62&color=important|Ye et al. 2025 - Generative language reconstruction from brain recordings, p.2]]
> >  (1) brain data is collected and features are extracted; (2) a brain adapter learns an embedding from the brain recordings; (3) prompts are constructed from brain and text modalities; (4) language is generated in an auto-regressive manner based on a model of the prompt and an LLM. The brain adapter learns to map the space of brain representations onto a space with the same dimensionality as the text embeddings in the LLM

> [!PDF|important] [[Ye et al. 2025 - Generative language reconstruction from brain recordings.pdf#page=2&selection=50,4,51,8&color=important|Ye et al. 2025 - Generative language reconstruction from brain recordings, p.2]]
> > a generation-based loss function is adopted to train the brain adapter.

> [!PDF|important] [[Ye et al. 2025 - Generative language reconstruction from brain recordings.pdf#page=2&selection=51,43,54,3&color=important|Ye et al. 2025 - Generative language reconstruction from brain recordings, p.2]]
> > parameters in the LLMs are fixed

> [!PDF|important] [[Ye et al. 2025 - Generative language reconstruction from brain recordings.pdf#page=2&selection=95,0,95,32&color=important|Ye et al. 2025 - Generative language reconstruction from brain recordings, p.2]]
> > backbone LLM selected as Llama-2

> [!PDF|important] [[Ye et al. 2025 - Generative language reconstruction from brain recordings.pdf#page=2&selection=99,47,103,18&color=important|Ye et al. 2025 - Generative language reconstruction from brain recordings, p.2]]
> > our analysis to include the GPT-2 series7 with varying sizes

> [!PDF|important] [[Ye et al. 2025 - Generative language reconstruction from brain recordings.pdf#page=2&selection=103,22,103,48&color=important|Ye et al. 2025 - Generative language reconstruction from brain recordings, p.2]]
> > split-by-stimuli protocol 


# Data (purple)


# Results (red)


> [!PDF|red] [[Ye et al. 2025 - Generative language reconstruction from brain recordings.pdf#page=1&selection=47,80,49,28&color=red|Ye et al. 2025 - Generative language reconstruction from brain recordings, p.1]]
> > our approach produces results more closely aligned with the visual or auditory language stimuli in response to which brain recordings are sampled


# Discussion (blue)


# Questions

