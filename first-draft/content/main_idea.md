---
title: "Main Idea"
date: 2018-05-08T16:10:28+02:00
draft: true
type: "main_idea"
---
<div>$$
    \left\\{
    \begin{align}
    \dot{x} & = \sigma(y-x) \newline
    \dot{y} & = \rho x - y - xz \newline
    \dot{z} & = -\beta z + xy
    \end{align}
    \right.
$$</div>
In the last few years, we have experienced a significant increment in
the adoption of knowledge graphs to model complex phenomena in
various domains. A knowledge graph is a heterogeneous network of
entities, such as the actress Diane Kruger and the movie Inglorious
Basterds, connected via named relationships, such as acted_in. These
networks conveniently represent various information like human
knowledge, biological processes, and research work.
Nevertheless, flexibility comes at the cost of complexity, since
knowledge graphs usually have no predefined schema, and query
languages, such as SPARQL, are hard to understand for novice users.
Moreover, commonly available knowledge graphs like YAGO [5]
and The Movie Database [11], contain millions of nodes and edges.
Hence, analyzing such graphs with traditional tools like Pegasus [3]
and SNAP [1] is usually difficult for inexperienced users. As a rem-
edy, exploration tools have been introduced to assist the user for-
mulating queries with simple interfaces [7], or restricting the area
of interest to some subset of the nodes [8]. The main shortcomings
of such approaches are the inability to adapt to the individual user
preferences [7] on the one hand, and the lack of a global view on the
graph [8] on the other hand.
To circumvent the aforementioned shortcomings, we introduce
MetaExp 1 , a system to interactively explore large knowledge graphs
in a user-centric manner. Our system bypasses convoluted queries
and guides the users towards the part of the graph they are inter-
ested in by inferring their personal interests through an interactive
process. Initially, MetaExp asks the user to provide two sets of nodes
in a knowledge graph; such sets delineate the semantic boundaries
of the interesting parts of the graph to explore. The interesting parts
of the graphs are identified through meta-paths [6, 10], which are
sequences of relationships (e.g., acted_in) between different entity 
types (e.g., Movie). Such meta-paths are an intuitive, yet expressive,
way to describe large portions of the graph without losing
information about the structure of the graph. In this way, MetaExp
allows the user to progressively refine their preferences, selecting
the meta-paths of interest that represent the user’s domain reflected
in the graph structure. The discovered meta-paths also provide a
convenient mechanism to explain the relationships among entities.
As opposed to system-centric graph summarization techniques [4],
MetaExp is user-centric in that it preserves the information that is
relevant for the user, and at the same time, retains the global view
on the graph through meta-paths that can be easily executed as
queries.

**Motivating Example:** Imagine a film critic, who is working on a
research concerning the German film panorama. They would like
to learn more about the reason behind the international inclination
of certain actors. For this purpose, the film critic defines a set of rep-
resentative German actors and another set of movies not produced
in Germany. As shown in Figure 1a they have at their disposal a
large knowledge graph of people, professions, countries, etc. Our
MetaExp addresses the knowledge graph complexity and the need
for personalization, asking simple questions to the film critic, who
can decide, for instance, to explicitly ignore the language of the
movie, represented as an edge in the graph. Afterwards, MetaExp
suggests the meta-paths in Figure 1b. Those meta-paths describe the
type of relationships between German actors and foreign movies.
Given their interests, the critic marks as irrelevant the meta-path
that represents the fact that actors are born in the same country;
conversely, they deem as important the one that represents inter-
national movies directed by an international director (e.g., Quentin
Tarantino for Pulp Fiction and Inglorious Basterds). These prefer-
ences delineate the characteristics of the inferred user similarity,
which will help finding international working German actors like
Marlene Dietrich.

**The MetaExp Showcase:** With MetaExp we showcase an innova-
tive exploration system to explain the similarity between two sets of
nodes guided by means of meta-paths while taking explicit domain
knowledge into account. While previous approaches embed a static
user preference into the system [8] or ask the user to manually
explore the node relationships [7], our approach is a middle ground
between these two approaches. In particular, MetaExp engages the
user by initially asking them to provide two sets of nodes to start
the exploration; then, by interactively refining the user preferences
showing few meta-paths to be rated. In the end, we provide an ag-
gregated similarity score and simple statistics, such as the number
of instances of a meta-path, to explain the relationships among the
initial node sets.