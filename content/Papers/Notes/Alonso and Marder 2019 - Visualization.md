---
title: Alonso and Marder 2019 - Visualization
paperTitle: "Visualization of currents in neural models with similar behavior and different conductance densities"
authors: Alonso, Leandro M,Marder, Eve
publish: true
cssclasses:
  - list-cards
type: annotation
project:
tags:
status: to read
progress: to annotate
---
# Annotation for [Alonso and Marder 2019 - Visualization](Papers/References/Alonso%20and%20Marder%202019%20-%20Visualization)

> [!abstract] Visualization of currents in neural models with similar behavior and different conductance densities

> [!example]- Authors
> - [Alonso, Leandro M](Alonso%2C%20Leandro%20M)
> - [Marder, Eve](Marder%2C%20Eve)

**Year:** 2019
**DOI:** 10.7554/eLife.42722
**URL:** https://elifesciences.org/articles/42722
**PDF:** [Alonso and Marder 2019 - Visualization](Papers/PDFs/Alonso%20and%20Marder%202019%20-%20Visualization%20of%20currents%20in%20neural%20models%20with%20similar%20behavior%20and%20different%20conductance%20densities.pdf)

# Highlights


# Goal (yellow)


# Method (purple)


# Data (purple)


# Results (red)


# Discussion (blue)


# Questions


# AI Summary
This paper, "Visualization of currents in neural models with similar behavior and different conductance densities" by Alonso and Marder (2019), introduces novel visualization methods to interpret data from conductance-based neural models, which often generate complex and difficult-to-visualize information. The core problem addressed is that neurons and circuits can exhibit similar behaviors despite having significantly different underlying conductances.

The authors propose two main visualization techniques:

- **Currentscapes**: These are stacked-area plots that display the time-varying percent contribution of each ionic current to the total membrane current. This method helps visualize which currents are most significant at any given moment and how their contributions change when the system is perturbed. This is particularly useful as some currents vary over orders of magnitude, making their relative contributions challenging to discern.
    
- **Membrane Potential (V) Distributions**: This method involves computing and displaying the probability distribution of the membrane potential over a range of perturbation control parameters. This visualization technique, while losing temporal information, effectively captures changes in the waveform of the membrane potential as parameters are altered. Peaks in these distributions correspond to key features of the waveform, such as spike amplitudes or minimum membrane potential, as the system spends more time at these values where the derivative of V is near zero. The derivative of these distributions can further highlight these features.
    

The study used a Hodgkin-Huxley formalism-based single-compartment neuron model with eight currents (I_Na, I_CaT, I_CaS, I_A, I_KCa, I_Kd, I_H, and I_leak). They employed landscape optimization techniques to find parameter sets that produce desired target activities, such as bursting or tonic firing. This optimization process scores voltage traces based on objective functions that define target activities, using measures like burst frequency, duty cycle, and threshold crossings.

The authors demonstrate the utility of these methods using six examples of bursting model neurons that show similar activity but can differ up to threefold in their conductance densities. They found that predicting currentscapes solely from maximal conductance values is difficult due to the non-linear relationship between current dynamics and maximal conductance. For instance, a larger maximal conductance does not always correlate with a larger current contribution.

The paper also explores the models' responses to perturbations, such as constant current injections and gradual removal of specific conductances. These perturbations reveal significant differences in how similar activities are generated across models. For example, removing inward currents like I_Na can lead to single-spike bursting modes with larger amplitudes, while removing outward currents like I_Kd can result in plateau oscillations. The visualizations highlight how different models respond uniquely to these changes, transitioning between bursting and tonic spiking regimes in diverse ways. These visualization methods provide valuable insights into the mechanisms underlying neuronal and network responses to perturbations, particularly given the intrinsic variability observed in biological systems.

The paper also includes figures illustrating the optimization process, currentscapes of bursting neurons, membrane potential distributions, and how these distributions change with varying conductance values, providing a comprehensive visual understanding of the model behavior.