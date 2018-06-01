---
title: "Metaexp"
date: 2018-05-14T15:07:02+02:00
draft: true

subtitle: "Interactive Exploration and Explanation of Large Knowledge Graphs"
paper: "https://hpi.de/fileadmin/user_upload/fachgebiete/mueller/publications/davide/BehrensWWW2018Metaexp.pdf"
code: "https://github.com/KDD-OpenSource"
video: "https://www.youtube.com/watch?v=7aBxVPUpUpM"
software: "http://metaexp.herokuapp.com/"
author_details: [
    ["example.jpg", "Author One", "mueller"],
    ["example.jpg", "Author Two", "mueller"],
    ["example.jpg", "Author Three"],
    ["example.jpg", "Author Four", "mueller"]
]
partners: [
    ["neo4j.png", "https://neo4j.com/", "neo4j"],
    ["helmholtz.svg", "https://www.helmholtz-muenchen.de/", "Helmholtz München"]
]

conference: "WWW"
year: "2018"
research_area: "Graph Exploration"
publication_type: "Demo Paper"
authors: ["Testauthor 1", "Testauthor 2", "Testauthor 3"]
booktitle: "Companion of the The Web Conference 2018 on The Web Conference 2018"
---
### Abstract
We present **MetaExp**, a system that assists the user during the
exploration of large knowledge graphs, given two sets of initial
nodes. At its core, MetaExp presents a small set of meta-paths to
the user, which are sequences of relationships among nodes. Such
meta-paths do not overwhelm the user with complex structures, yet
they preserve semantically-rich relationships in a graph. MetaExp
engages the user in an interactive procedure, which involves simple
meta-paths evaluations to infer a user-specific similarity measure.
This similarity measure incorporates the domain knowledge and
the preferences of the user, overcoming the fundamental limitations
of previous methods based on local node neighborhoods or fixed
similarity scores. Our system provides a user-friendly interface for
searching initial nodes and guides the user towards progressive
refinements of the meta-paths. The system is demonstrated on three
datasets, an ontology, a movie database, and a biological network.

### Main Idea

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

<div>$$
    \begin{align}
    \dot{x} & = \sigma(y-x) \newline
    \dot{y} & = \rho x - y - xz \newline
    \dot{z} & = -\beta z + xy
    \end{align}
$$</div>

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

 
### Demo Scenario
Consider the case of a user, who would like to find unknown
movies based on the ones they already know. The user puts known
movies in one node set and unknown movies in the other node set.
Our system provides the functionality to search nodes by id,
property or a CYPHER query.
Next, the user can prohibit
certain node- or edge-types from being included into meta-paths.
The user expects reviewers and followers of movies to not have
an impact on the quality and style of a movie, so they click on the
corresponding switches to exclude them.
Now, five initial meta-paths are shown to the user.
Here, the user can incorporate their domain knowledge
by ordering or rejecting the meta-paths. For instance, meta-paths
involving the write relationship are more interesting to the user
than meta-paths involving the acted_in relationship as screenplay
writers have a higher influence on the style of a movie. Thus, the
user places meta-paths involving write relationships more to the
right on the line than meta-paths involving acted_in relationships.
Also, some meta-paths may convey no information relevant to their
analysis. To exclude such meta-paths from the similarity measure
the user can click the remove button right to the meta-path. For
instance, long chains of the acted_in relationship do not carry a lot
of meaning with regard to the style of the movie. When they have
finished arranging the first five meta-paths, the user can click on
the button Next Iteration to get another five meta-paths. In order
to help the user position the next meta-paths, the system displays
three reference meta-paths. These reference meta-paths represent
the first, second (median) and third quantile of previously ordered
meta-paths.
Finally, the results based on the previously defined domain scores
are presented and explained on the last page. The user
is presented the similarity score of the entered movie sets. The
score is explained through a pie chart illustrating the contribution
of meta-paths to the similarity score. Furthermore, the user can
retrieve detailed information about each of these meta-paths, like
exemplary instances, by selecting its slice of the pie chart.
In addition to this, the user is able to select a node or several
nodes from one of the original input node sets. Subsequent, nodes
which are similar to the selection are displayed. Moreover, for each
of those nodes the properties, the similarity to the selected nodes
and a part of their one-neighborhood is shown. The user can add
the displayed nodes to the input sets, thereby refine the query and
start a new iteration of the whole process.