---
title: "Demonstration Scenario"
date: 2018-05-08T16:10:45+02:00
draft: true
type: "demo_scenario"
---
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