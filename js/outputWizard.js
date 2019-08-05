
/*

wall layout list - 1 WOM

NUM | # WALLS |  WALL 1  |  WALL 2  |  WALL 3  | 4Kp30 | 4Kp60 | MST
----+---------+----------+----------+----------+-------+-------+----
  1 | 1       | 1x 6 @ 1 | -        | -        | n     | n     | 1
  2 | 1       | 1x 3 @ 1 | -        | -        | y     | n     |
  3 | 1       | 1x 1 @ 1 | -        | -        | y     | y     |
  4 | 1       | 1x 2 @ 1 | -        | -        | y     | n     |
  5 | 1       | 1x 4 @ 1 | -        | -        | n     | n     | 1
  6 | 1       | 1x 5 @ 1 | -        | -        | n     | n     | 1
  7 | 1       | 2x 1 @ 1 | -        | -        | n     | n     |
  8 | 1       | 2x 2 @ 1 | -        | -        | n     | n     |
  9 | 1       | 2x 3 @ 1 | -        | -        | n     | n     |
 10 | 2       | 1x 3 @ 1 | 1x 3 @ 4 | -        | n     | n     | 1 2
 11 | 2       | 1x 4 @ 1 | 1x 2 @ 5 | -        | n     | n     | 1 2
 12 | 3       | 1x 4 @ 1 | 1x 1 @ 5 | 1x 1 @ 6 | n     | n     | 1 2 3
 13 | 3       | 1x 2 @ 1 | 1x 2 @ 3 | 1x 2 @ 5 | n     | n     | 1 2 3
 
*/

var layouts_1w = new Object();
layouts_1w.numWalls  = [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3];

layouts_1w.w1_long   = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

layouts_1w.w1_rows   = [1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1];
layouts_1w.w1_cols   = [6, 3, 1, 2, 4, 5, 1, 2, 3, 3, 4, 4, 2];
layouts_1w.w1_anchor = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
layouts_1w.w1_fold   = [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0];

layouts_1w.w2_rows   = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1];
layouts_1w.w2_cols   = [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 2, 1, 2];
layouts_1w.w2_anchor = [0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 5, 5, 3];
layouts_1w.w2_fold   = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

layouts_1w.w3_rows   = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1];
layouts_1w.w3_cols   = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2];
layouts_1w.w3_anchor = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 5];
layouts_1w.w3_fold   = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

layouts_1w.uhd30     = [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
layouts_1w.uhd60     = [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
layouts_1w.mst       = [1, 0, 0, 0, 1, 1, 0, 0, 0, 2, 2, 3, 3];


/*

wall layout list - 1 DOM

NUM | # WALLS |  WALL 1  |  WALL 2  |  WALL 3  | 4Kp30 | 4Kp60 | MST
----+---------+----------+----------+----------+-------+-------+----
  2 | 1       | 1x 3 @ 1 | -        | -        | y     | n     |
  3 | 1       | 1x 1 @ 1 | -        | -        | y     | y     |
  4 | 1       | 1x 2 @ 1 | -        | -        | y     | n     |

*/

var layouts_1d = new Object();
layouts_1d.numWalls  = [1, 1, 1];

layouts_1d.w1_long   = [0, 0, 0];

layouts_1d.w1_rows   = [1, 1, 1];
layouts_1d.w1_cols   = [3, 1, 2];
layouts_1d.w1_anchor = [1, 1, 1];
layouts_1d.w1_fold   = [0, 0, 0];

layouts_1d.w2_rows   = [0, 0, 0];
layouts_1d.w2_cols   = [0, 0, 0];
layouts_1d.w2_anchor = [0, 0, 0];
layouts_1d.w2_fold   = [0, 0, 0];

layouts_1d.w3_rows   = [0, 0, 0];
layouts_1d.w3_cols   = [0, 0, 0];
layouts_1d.w3_anchor = [0, 0, 0];
layouts_1d.w3_fold   = [0, 0, 0];

layouts_1d.uhd30     = [1, 1, 1];
layouts_1d.uhd60     = [0, 1, 0];
layouts_1d.mst       = [0, 0, 0];


/*

wall layout list - 2 WOMs

NUM | # WALLS |  WALL 1  |  WALL 2  |  WALL 3  | 4Kp30 | 4Kp60 | MST
----+---------+----------+----------+----------+-------+-------+----
  1 | 1       | 2x 6 @ 1 | -        | -        | n     | n     | 1
  2 | 1       | 2x 3 @ 1 | -        | -        | y     | n     |
  3 | 1       | 2x 1 @ 1 | -        | -        | y     | y     |
  4 | 1       | 1x 1 @ 7 | -        | -        | y     | y     |
  5 | 1       | 1x 1 @ 1 | -        | -        | y     | y     |
  6 | 1       | 1x 2 @ 1 | -        | -        | y     | n     |
  7 | 1       | 1x 3 @ 1 | -        | -        | y     | n     |
  8 | 1       | 1x 4 @ 1 | -        | -        | n     | n     | 1
  9 | 1       | 1x 5 @ 1 | -        | -        | n     | n     | 1
 10 | 1       | 1x 6 @ 1 | -        | -        | n     | n     | 1
 11 | 1       | 2x 2 @ 1 | -        | -        | y     | n     |
 12 | 1       | 2x 4 @ 1 | -        | -        | n     | n     | 1
 13 | 1       | 2x 5 @ 1 | -        | -        | n     | n     | 1
 14 | 1       | 3x 1 @ 1 | -        | -        | n     | n     | 1
 15 | 1       | 3x 2 @ 1 | -        | -        | n     | n     | 1
 16 | 1       | 3x 3 @ 1 | -        | -        | n     | n     | 1
 17 | 1       | 4x 1 @ 1 | -        | -        | n     | n     | 1
 18 | 1       | 4x 2 @ 1 | -        | -        | n     | n     | 1
 19 | 1       | 4x 3 @ 1 | -        | -        | n     | n     | 1
 20 | 1       | 1x12 @ 1 | -        | -        | n     | n     | 1
 21 | 1       | 1x 6 @ 1 | -        | -        | y     | n     |
 22 | 2       | 3x 3 @ 1 | 1x 3 @10 | -        | n     | n     | 1 2
 23 | 2       | 1x 6 @ 1 | 1x 6 @ 7 | -        | n     | n     | 1 2
 24 | 2       | 2x 3 @ 1 | 2x 3 @ 4 | -        | n     | n     | 1 2
 25 | 2       | 2x 4 @ 1 | 2x 2 @ 5 | -        | n     | n     | 1 2
 26 | 3       | 2x 2 @ 1 | 2x 2 @ 3 | 2x 2 @ 5 | n     | n     | 1 2 3
 27 | 2       | 1x 3 @ 1 | 1x 3 @ 7 | -        | y     | n     |
 
*/

var layouts_2w = new Object();
layouts_2w.numWalls  = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 2];

layouts_2w.w1_long   = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

layouts_2w.w1_rows   = [2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 1, 1, 3, 1, 2, 2, 2, 1];
layouts_2w.w1_cols   = [6, 3, 1, 1, 1, 2, 3, 4, 5, 6, 2, 4, 5, 1, 2, 3, 1, 2, 3, 12,6, 3, 6, 3, 4, 2, 3];
layouts_2w.w1_anchor = [1, 1, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
layouts_2w.w1_fold   = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0];

layouts_2w.w2_rows   = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 1];
layouts_2w.w2_cols   = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 6, 3, 2, 2, 3];
layouts_2w.w2_anchor = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10,7, 4, 5, 3, 7];
layouts_2w.w2_fold   = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

layouts_2w.w3_rows   = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0];
layouts_2w.w3_cols   = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0];
layouts_2w.w3_anchor = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0];
layouts_2w.w3_fold   = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

layouts_2w.uhd30     = [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
layouts_2w.uhd60     = [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
layouts_2w.mst       = [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 2, 2, 2, 3, 0];

/*

wall layout list - 2 DOMs

NUM | # WALLS |  WALL 1  |  WALL 2  |  WALL 3  | 4Kp30 | 4Kp60 | MST
----+---------+----------+----------+----------+-------+-------+----
  2 | 1       | 2x 3 @ 1 | -        | -        | y     | n     |
  3 | 1       | 2x 1 @ 1 | -        | -        | y     | y     |
  4 | 1       | 1x 1 @ 7 | -        | -        | y     | y     |
  5 | 1       | 1x 1 @ 1 | -        | -        | y     | y     |
  6 | 1       | 1x 2 @ 1 | -        | -        | y     | n     |
  7 | 1       | 1x 3 @ 1 | -        | -        | y     | n     |
 11 | 1       | 2x 2 @ 1 | -        | -        | y     | n     |
 21 | 1       | 1x 6 @ 1 | -        | -        | y     | n     |
 27 | 2       | 1x 3 @ 1 | 1x 3 @ 7 | -        | y     | n     |
 
*/

var layouts_2d = new Object();
layouts_2d.numWalls  = [1, 1, 1, 1, 1, 1, 1, 1, 2];

layouts_2d.w1_long   = [0, 0, 0, 0, 0, 0, 0, 0, 0];

layouts_2d.w1_rows   = [2, 2, 1, 1, 1, 1, 2, 1, 1];
layouts_2d.w1_cols   = [3, 1, 1, 1, 2, 3, 2, 6, 3];
layouts_2d.w1_anchor = [1, 1, 7, 1, 1, 1, 1, 1, 1];
layouts_2d.w1_fold   = [0, 0, 0, 0, 0, 0, 0, 0, 0];

layouts_2d.w2_rows   = [0, 0, 0, 0, 0, 0, 0, 0, 1];
layouts_2d.w2_cols   = [0, 0, 0, 0, 0, 0, 0, 0, 3];
layouts_2d.w2_anchor = [0, 0, 0, 0, 0, 0, 0, 0, 7];
layouts_2d.w2_fold   = [0, 0, 0, 0, 0, 0, 0, 0, 0];

layouts_2d.w3_rows   = [0, 0, 0, 0, 0, 0, 0, 0, 0];
layouts_2d.w3_cols   = [0, 0, 0, 0, 0, 0, 0, 0, 0];
layouts_2d.w3_anchor = [0, 0, 0, 0, 0, 0, 0, 0, 0];
layouts_2d.w3_fold   = [0, 0, 0, 0, 0, 0, 0, 0, 0];

layouts_2d.uhd30     = [1, 1, 1, 1, 1, 1, 1, 1, 1];
layouts_2d.uhd60     = [0, 1, 1, 1, 0, 0, 0, 0, 0];
layouts_2d.mst       = [0, 0, 0, 0, 0, 0, 0, 0, 0];

/*

wall layout list - 3 WOMs

NUM | # WALLS |  WALL 1  |  WALL 2  |  WALL 3  | 4Kp30 | 4Kp60 | MST
----+---------+----------+----------+----------+-------+-------+----
  1 | 1       | 3x 6 @ 1 | -        | -        | n     | n     | 1
  2 | 1       | 3x 3 @ 1 | -        | -        | y     | n     | 1
  3 | 1       | 3x 1 @ 1 | -        | -        | y     | y     |
  4 | 1       | 1x 1 @13 | -        | -        | y     | y     |
  5 | 1       | 2x 1 @ 7 | -        | -        | y     | y     |
  6 | 1       | 1x 1 @ 1 | -        | -        | y     | y     |
  7 | 1       | 1x 2 @ 1 | -        | -        | y     | n     |
  8 | 1       | 1x 3 @ 1 | -        | -        | y     | n     |
  9 | 1       | 1x 4 @ 1 | -        | -        | n     | n     | 1
 10 | 1       | 1x 5 @ 1 | -        | -        | n     | n     | 1
 11 | 1       | 1x 6 @ 1 | -        | -        | n     | n     | 1
 12 | 1       | 2x 1 @ 1 | -        | -        | y     | y     |
 13 | 1       | 2x 2 @ 1 | -        | -        | y     | n     |
 14 | 1       | 2x 3 @ 1 | -        | -        | y     | n     |
 15 | 1       | 2x 4 @ 1 | -        | -        | n     | n     | 1
 16 | 1       | 2x 5 @ 1 | -        | -        | n     | n     | 1
 17 | 1       | 2x 6 @ 1 | -        | -        | n     | n     | 1
 18 | 1       | 3x 2 @ 1 | -        | -        | y     | n     |
 19 | 1       | 3x 4 @ 1 | -        | -        | n     | n     | 1
 20 | 1       | 3x 5 @ 1 | -        | -        | n     | n     | 1
 21 | 1       | 4x 1 @ 1 | -        | -        | n     | n     | 1
 22 | 1       | 4x 2 @ 1 | -        | -        | n     | n     | 1
 23 | 1       | 4x 3 @ 1 | -        | -        | n     | n     | 1
 24 | 1       | 5x 1 @ 1 | -        | -        | n     | n     | 1
 25 | 1       | 5x 2 @ 1 | -        | -        | n     | n     | 1
 26 | 1       | 5x 3 @ 1 | -        | -        | n     | n     | 1
 27 | 1       | 6x 1 @ 1 | -        | -        | n     | n     | 1
 28 | 1       | 6x 2 @ 1 | -        | -        | n     | n     | 1
 29 | 1       | 6x 3 @ 1 | -        | -        | n     | n     | 1
 30 | 1       | 1x18 @ 1 | -        | -        | n     | n     | 1
 31 | 1       | 1x 9 @ 1 | -        | -        | y     | n     |
 32 | 2       | 3x 3 @ 1 | 3x 3 @ 4 | -        | n     | n     | 1 2
 33 | 2       | 3x 4 @ 1 | 3x 2 @ 5 | -        | n     | n     | 1 2
 34 | 2       | 2x 6 @ 1 | 1x 6 @13 | -        | n     | n     | 1 2
 35 | 3       | 3x 2 @ 1 | 3x 2 @ 3 | 3x 2 @ 5 | n     | n     | 1 2 3
 36 | 3       | 3x 3 @ 1 | 2x 3 @ 4 | 1x 3 @16 | n     | n     | 1 2 3
 37 | 3       | 3x 4 @ 1 | 2x 2 @ 5 | 1x 2 @17 | n     | n     | 1 2 3
 38 | 2       | 4x 3 @ 1 | 2x 3 @13 | -        | n     | n     | 1 2
 39 | 2       | 5x 3 @ 1 | 1x 3 @16 | -        | n     | n     | 1 2
 40 | 3       | 2x 3 @ 1 | 2x 3 @ 4 | 2x 3 @13 | n     | n     | 1 2 3
 41 | 2       | 2x 3 @ 1 | 1x 3 @13 | -        | y     | n     | 1 2
 
*/

var layouts_3w = new Object();
layouts_3w.numWalls  = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 2, 2, 3, 2];

layouts_3w.w1_long   = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

layouts_3w.w1_rows   = [3, 3, 3, 1, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 1, 1, 3, 3, 2, 3, 3, 3, 4, 5, 2, 2];
layouts_3w.w1_cols   = [6, 3, 1, 1, 1, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 2, 4, 5, 1, 2, 3, 1, 2, 3, 1, 2, 3, 18,9, 3, 4, 6, 2, 3, 4, 3, 3, 3, 3];
layouts_3w.w1_anchor = [1, 1, 1, 13,7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
layouts_3w.w1_fold   = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0];

layouts_3w.w2_rows   = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 1, 3, 2, 2, 2, 1, 2, 1];
layouts_3w.w2_cols   = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 2, 6, 2, 3, 2, 3, 3, 3, 3];
layouts_3w.w2_anchor = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 5, 13,3, 4, 5, 13,16,4,13];
layouts_3w.w2_fold   = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0];

layouts_3w.w3_rows   = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 0, 0, 2, 0];
layouts_3w.w3_cols   = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 2, 0, 0, 3, 0];
layouts_3w.w3_anchor = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5,16,17, 0, 0,13, 0];
layouts_3w.w3_fold   = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];

layouts_3w.uhd30     = [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
layouts_3w.uhd60     = [0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
layouts_3w.mst       = [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 2, 2, 3, 3, 3, 2, 2, 3, 2];

/*

wall layout list - 3 DOMs

NUM | # WALLS |  WALL 1  |  WALL 2  |  WALL 3  | 4Kp30 | 4Kp60 | MST
----+---------+----------+----------+----------+-------+-------+----
  2 | 1       | 3x 3 @ 1 | -        | -        | y     | n     | 1
  3 | 1       | 3x 1 @ 1 | -        | -        | y     | y     |
  4 | 1       | 1x 1 @13 | -        | -        | y     | y     |
  5 | 1       | 2x 1 @ 7 | -        | -        | y     | y     |
  6 | 1       | 1x 1 @ 1 | -        | -        | y     | y     |
  7 | 1       | 1x 2 @ 1 | -        | -        | y     | n     |
  8 | 1       | 1x 3 @ 1 | -        | -        | y     | n     |
 12 | 1       | 2x 1 @ 1 | -        | -        | y     | y     |
 13 | 1       | 2x 2 @ 1 | -        | -        | y     | n     |
 14 | 1       | 2x 3 @ 1 | -        | -        | y     | n     |
 18 | 1       | 3x 2 @ 1 | -        | -        | y     | n     |
 31 | 1       | 1x 9 @ 1 | -        | -        | y     | n     |
 41 | 2       | 2x 3 @ 1 | 1x 3 @13 | -        | y     | n     | 1 2

 */

var layouts_3d = new Object();
layouts_3d.numWalls  = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2];

layouts_3d.w1_long   = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

layouts_3d.w1_rows   = [3, 3, 1, 2, 1, 1, 1, 2, 2, 2, 3, 1, 2];
layouts_3d.w1_cols   = [3, 1, 1, 1, 1, 2, 3, 1, 2, 3, 2, 9, 3];
layouts_3d.w1_anchor = [1, 1, 13,7, 1, 1, 1, 1, 1, 1, 1, 1, 1];
layouts_3d.w1_fold   = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

layouts_3d.w2_rows   = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
layouts_3d.w2_cols   = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3];
layouts_3d.w2_anchor = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,13];
layouts_3d.w2_fold   = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

layouts_3d.w3_rows   = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
layouts_3d.w3_cols   = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
layouts_3d.w3_anchor = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
layouts_3d.w3_fold   = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

layouts_3d.uhd30     = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
layouts_3d.uhd60     = [0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0];
layouts_3d.mst       = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2];

/*

wall layout list - 4 WOMs

NUM | # WALLS |  WALL 1  |  WALL 2  |  WALL 3  | 4Kp30 | 4Kp60 | MST
----+---------+----------+----------+----------+-------+-------+----
  1 | 1       | 4x 6 @ 1 | -        | -        | n     | n     | 1
  2 | 1       | 4x 3 @ 1 | -        | -        | y     | n     |
  3 | 1       | 4x 1 @ 1 | -        | -        | y     | y     |
  4 | 1       | 1x 1 @19 | -        | -        | y     | y     |
  5 | 1       | 2x 1 @13 | -        | -        | y     | y     |
  6 | 1       | 3x 1 @ 7 | -        | -        | y     | y     |
  7 | 1       | 1x 1 @ 1 | -        | -        | y     | y     |
  8 | 1       | 1x 2 @ 1 | -        | -        | y     | n     |
  9 | 1       | 1x 3 @ 1 | -        | -        | y     | n     |
 10 | 1       | 1x 4 @ 1 | -        | -        | n     | n     | 1
 11 | 1       | 1x 5 @ 1 | -        | -        | n     | n     | 1
 12 | 1       | 1x 6 @ 1 | -        | -        | n     | n     | 1
 13 | 1       | 2x 1 @ 1 | -        | -        | y     | y     |
 14 | 1       | 2x 2 @ 1 | -        | -        | y     | n     |
 15 | 1       | 2x 3 @ 1 | -        | -        | y     | n     |
 16 | 1       | 2x 4 @ 1 | -        | -        | n     | n     | 1
 17 | 1       | 2x 5 @ 1 | -        | -        | n     | n     | 1
 18 | 1       | 2x 6 @ 1 | -        | -        | n     | n     | 1
 19 | 1       | 3x 1 @ 1 | -        | -        | y     | y     |
 20 | 1       | 3x 2 @ 1 | -        | -        | y     | n     |
 21 | 1       | 3x 3 @ 1 | -        | -        | y     | n     |
 22 | 1       | 3x 4 @ 1 | -        | -        | n     | n     | 1
 23 | 1       | 3x 5 @ 1 | -        | -        | n     | n     | 1
 24 | 1       | 3x 6 @ 1 | -        | -        | n     | n     | 1
 25 | 1       | 4x 2 @ 1 | -        | -        | y     | n     |
 26 | 1       | 4x 4 @ 1 | -        | -        | n     | n     | 1
 27 | 1       | 4x 5 @ 1 | -        | -        | n     | n     | 1
 28 | 1       | 5x 1 @ 1 | -        | -        | n     | n     | 1
 29 | 1       | 5x 2 @ 1 | -        | -        | n     | n     | 1
 30 | 1       | 5x 3 @ 1 | -        | -        | n     | n     | 1
 31 | 1       | 6x 1 @ 1 | -        | -        | n     | n     | 1
 32 | 1       | 6x 2 @ 1 | -        | -        | n     | n     | 1
 33 | 1       | 6x 3 @ 1 | -        | -        | n     | n     | 1
 34 | 1       | 7x 1 @ 1 | -        | -        | n     | n     | 1
 35 | 1       | 7x 2 @ 1 | -        | -        | n     | n     | 1
 36 | 1       | 7x 3 @ 1 | -        | -        | n     | n     | 1
 37 | 1       | 8x 1 @ 1 | -        | -        | n     | n     | 1
 38 | 1       | 8x 2 @ 1 | -        | -        | n     | n     | 1
 39 | 1       | 8x 3 @ 1 | -        | -        | n     | n     | 1
 40 | 1       | 1x24 @ 1 | -        | -        | n     | n     | 1
 41 | 1       | 1x12 @ 1 | -        | -        | y     | n     |
 42 | 1       | 2x 8 @ 1 | -        | -        | n     | n     | 1
 43 | 1       | 2x10 @ 1 | -        | -        | n     | n     | 1
 44 | 1       | 2x12 @ 1 | -        | -        | n     | n     | 1
 45 | 1       | 2x 6 @ 1 | -        | -        | y     | n     |
 46 | 2       | 4x 3 @ 1 | 4x 3 @ 4 | -        | n     | n     | 1 2
 47 | 2       | 4x 4 @ 1 | 4x 2 @ 5 | -        | n     | n     | 1 2
 48 | 2       | 2x 6 @ 1 | 2x 6 @13 | -        | n     | n     | 1 2
 49 | 2       | 3x 6 @ 1 | 1x 6 @19 | -        | n     | n     | 1 2
 50 | 3       | 4x 2 @ 1 | 4x 2 @ 3 | 4x 2 @ 5 | n     | n     | 1 2 3
 51 | 3       | 4x 3 @ 1 | 2x 3 @ 4 | 2x 3 @16 | n     | n     | 1 2 3
 52 | 3       | 4x 3 @ 1 | 3x 3 @ 4 | 1x 3 @22 | n     | n     | 1 2 3
 53 | 3       | 4x 4 @ 1 | 2x 2 @ 5 | 2x 2 @17 | n     | n     | 1 2 3
 54 | 3       | 4x 4 @ 1 | 3x 2 @ 5 | 1x 2 @23 | n     | n     | 1 2 3
 55 | 3       | 2x 6 @ 1 | 2x 3 @13 | 2x 3 @16 | n     | n     | 1 2 3
 56 | 3       | 3x 6 @ 1 | 1x 3 @19 | 1x 3 @22 | n     | n     | 1 2 3
 57 | 2       | 2x 6 @ 1 | 4x 3 @13 | -        | n     | n     | 1 2
 58 | 2       | 6x 3 @ 1 | 2x 3 @19 | -        | n     | n     | 1 2
 59 | 2       | 6x 3 @ 1 | 1x 6 @19 | -        | n     | n     | 1 2
 60 | 3       | 6x 3 @ 1 | 1x 3 @19 | 1x 3 @22 | n     | n     | 1 2 3
 61 | 3       | 5x 3 @ 1 | 1x 3 @16 | 1x 6 @19 | n     | n     | 1 2 3
 62 | 3       | 2x 6 @ 1 | 3x 3 @13 | 1x 3 @16 | n     | n     | 1 2 3
 63 | 2       | 2x 3 @ 1 | 2x 3 @13 | -        | y     | n     | 1 2 3

 */

var layouts_4w = new Object();
layouts_4w.numWalls  = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 3, 3, 3, 2];

layouts_4w.w1_long   = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

layouts_4w.w1_rows   = [4, 4, 4, 1, 2, 3, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 1, 1, 2, 2, 2, 2, 4, 4, 2, 3, 4, 4, 4, 4, 4, 2, 3, 2, 6, 6, 6, 5, 2, 2];
layouts_4w.w1_cols   = [6, 3, 1, 1, 1, 1, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 2, 4, 5, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3,24,12, 8,10,12, 6, 3, 4, 6, 6, 2, 3, 3, 4, 4, 6, 6, 6, 3, 3, 3, 3, 6, 3];
layouts_4w.w1_anchor = [1, 1, 1,19,13, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
layouts_4w.w1_fold   = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0];


layouts_4w.w2_rows   = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 2, 1, 4, 2, 3, 2, 3, 2, 1, 4, 2, 1, 1, 1, 3, 2];
layouts_4w.w2_cols   = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 2, 6, 6, 2, 3, 3, 2, 2, 3, 3, 3, 3, 6, 3, 3, 3, 3];
layouts_4w.w2_anchor = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 5,13,19, 3, 4, 4, 5, 5,13,19,13,19,19,19,16,13,13];
layouts_4w.w2_fold   = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0];

layouts_4w.w3_rows   = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2, 1, 2, 1, 2, 1, 0, 0, 0, 1, 1, 1, 0];
layouts_4w.w3_cols   = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 3, 2, 2, 3, 3, 0, 0, 0, 3, 6, 3, 0];
layouts_4w.w3_anchor = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5,16,22,17,23,16,22, 0, 0, 0,22,19,16, 0];
layouts_4w.w3_fold   = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0];

layouts_4w.uhd30     = [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
layouts_4w.uhd60     = [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
layouts_4w.mst       = [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 3, 3, 3, 3];

/*

wall layout list - 4 DOMs

NUM | # WALLS |  WALL 1  |  WALL 2  |  WALL 3  | 4Kp30 | 4Kp60 | MST
----+---------+----------+----------+----------+-------+-------+----
  2 | 1       | 4x 3 @ 1 | -        | -        | y     | n     |
  3 | 1       | 4x 1 @ 1 | -        | -        | y     | y     |
  4 | 1       | 1x 1 @19 | -        | -        | y     | y     |
  5 | 1       | 2x 1 @13 | -        | -        | y     | y     |
  6 | 1       | 3x 1 @ 7 | -        | -        | y     | y     |
  7 | 1       | 1x 1 @ 1 | -        | -        | y     | y     |
  8 | 1       | 1x 2 @ 1 | -        | -        | y     | n     |
  9 | 1       | 1x 3 @ 1 | -        | -        | y     | n     |
 13 | 1       | 2x 1 @ 1 | -        | -        | y     | y     |
 14 | 1       | 2x 2 @ 1 | -        | -        | y     | n     |
 15 | 1       | 2x 3 @ 1 | -        | -        | y     | n     |
 19 | 1       | 3x 1 @ 1 | -        | -        | y     | y     |
 20 | 1       | 3x 2 @ 1 | -        | -        | y     | n     |
 21 | 1       | 3x 3 @ 1 | -        | -        | y     | n     |
 25 | 1       | 4x 2 @ 1 | -        | -        | y     | n     |
 41 | 1       | 1x12 @ 1 | -        | -        | y     | n     |
 45 | 1       | 2x 6 @ 1 | -        | -        | y     | n     |
 63 | 2       | 2x 3 @ 1 | 2x 3 @13 | -        | y     | n     | 1 2 3

 */

var layouts_4d = new Object();
layouts_4d.numWalls  = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2];

layouts_4d.w1_long   = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

layouts_4d.w1_rows   = [4, 4, 1, 2, 3, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 1, 2, 2];
layouts_4d.w1_cols   = [3, 1, 1, 1, 1, 1, 2, 3, 1, 2, 3, 1, 2, 3, 2,12, 6, 3];
layouts_4d.w1_anchor = [1, 1,19,13, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
layouts_4d.w1_fold   = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

layouts_4d.w2_rows   = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2];
layouts_4d.w2_cols   = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3];
layouts_4d.w2_anchor = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,13];
layouts_4d.w2_fold   = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

layouts_4d.w3_rows   = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
layouts_4d.w3_cols   = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
layouts_4d.w3_anchor = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
layouts_4d.w3_fold   = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

layouts_4d.uhd30     = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
layouts_4d.uhd60     = [0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0];
layouts_4d.mst       = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3];
 
/* ------------------------------------------------------------------------- */

function adjustWallOutputCount(){

// $("#somCount").change(function(){
    var x = document.forms["systemInfo"].elements["somCount"].value;
    var numSlots = 1;
    var isModel500 = ($('input[name=modelNumber]:checked', '#systemInfo').val()) == 500;
      if (isModel500){
          numSlots = 2 - x
          }
          else{
          numSlots = 4 - x
          }

    switch (x){
    case "0":
          if (isModel500){
          	$('#slot2').show();          
          	$('#slot3').hide();                    
          	$('#slot4').hide()            
      }
      else{
          showAllSlotSelectors()          
      }    
      break;

    case "1":
          if (isModel500){
          	$('#slot2').hide();          
          	$('#slot3').hide();                    
          	$('#slot4').hide()                    
      }
      else{
          	$('#slot2').show();          
          	$('#slot3').show();                    
          	$('#slot4').hide()                    
      }
      break;
      
    case "2":
          	$('#slot2').show();          
          	$('#slot3').hide();                    
          	$('#slot4').hide()                    
      break;
      
    case "3":
          	$('#slot2').hide();          
          	$('#slot3').hide();                    
          	$('#slot4').hide()                    
      break;
    }
    return numSlots;
//  });
}

function appendStyle(styles) {
  var css = outputList.document.createElement('style');
  css.type = 'text/css';

  if (css.styleSheet) css.styleSheet.cssText = styles;
  else css.appendChild(outputList.document.createTextNode(styles));

  outputList.document.getElementsByTagName("head")[0].appendChild(css);
}

function filterCardTypes(){
    var sysInfo = document.forms["systemInfo"];
    var optm    = sysInfo.elements["optm"].value;
    for (var slotNum=1; slotNum<=4; ++slotNum){
        var id_d = "dom" + String(slotNum);
        var id_w = "wom" + String(slotNum);
        switch (optm){
        case "2K/HD":
            document.getElementById(id_w).disabled = false;    
            document.getElementById(id_w).checked  = true;
            document.getElementById(id_d).disabled = true;    
            document.getElementById(id_d).checked  = false;    
          break;

        case "4K/UHD @ 30Hz":
            document.getElementById(id_w).disabled = false;
            document.getElementById(id_d).disabled = false;
          break;
          
        case "4K/UHD @ 60Hz":
            document.getElementById(id_d).disabled = false;    
            document.getElementById(id_d).checked  = true;
            document.getElementById(id_w).disabled = true;
          break;
        }
  }
  return optm;
}  

function getOutputNumbers(){
    var sysInfo = document.forms["systemInfo"];
    var o = filterCardTypes();
    var s = adjustWallOutputCount();
    
    var opNumbers = new Array();
    
    for (var slotNum=1; slotNum<=s; ++slotNum){
    var outputNumberOffset = 6 * (slotNum - 1);
    switch (o){
    case "2K/HD":
        for (var p=1; p<=6; ++p){
        var z = p + outputNumberOffset;
        opNumbers.push(z);
       }    
    break;
    
    case "4K/UHD @ 30Hz":
        var id_w = "wom" + String(slotNum);    
        for (var p=1; p<=3; ++p){
        if (document.getElementById(id_w).checked == true){ // type = "wom"
        var z = (2 * p) + outputNumberOffset;
        opNumbers.push(z);            
        }
        else{                                                 // type = "dom"
        var z = p + (p - 1) + outputNumberOffset;
        opNumbers.push(z);                        
        }
       }    
    break;
      
    case "4K/UHD @ 60Hz":
        var z = 1 + outputNumberOffset;
        opNumbers.push(z);
    break;
    }
    }
    return opNumbers;
}      
  
function hideSlots3and4selectors()
{	
$(document).ready(function(){
	$('#slot3').hide();
	$('#slot4').hide();
}); 
}

function listOutputs(){
    var outputs    = getOutputNumbers();
    console.log(outputs);
    var sysInfo = document.forms["systemInfo"];
    var layoutIndex  = (sysInfo.elements["layout"].value) - 1;

    var o = filterCardTypes();
    var s = adjustWallOutputCount();
	var multiplier = 1;
    
    switch (o)
    {
    case "4K/UHD @ 60Hz":
	multiplier = 6;
    break;
    case "4K/UHD @ 30Hz":
	multiplier = 2;
    break;
    }	

    switch (s)
    {
    case 1:
    layouts = layouts_1w;
    if(o == "4K/UHD @ 60Hz"){
        layouts = layouts_1d;
    }
    break;
    case 2:
    layouts = layouts_2w;
    if(o == "4K/UHD @ 60Hz"){
        layouts = layouts_2d;
    }
    break;
    case 3:
    layouts = layouts_3w;
    if(o == "4K/UHD @ 60Hz"){
        layouts = layouts_3d;
    }
    break;
    case 4:
    layouts = layouts_4w;
    if(o == "4K/UHD @ 60Hz"){
        layouts = layouts_4d;
    }
    break;
    }	
    
    var n = layouts.numWalls[layoutIndex];

    var wallParams = [ 
      [layouts.w1_rows[layoutIndex], layouts.w1_cols[layoutIndex], layouts.w1_anchor[layoutIndex], layouts.w1_fold[layoutIndex], layouts.w1_long[layoutIndex]],
      [layouts.w2_rows[layoutIndex], layouts.w2_cols[layoutIndex], layouts.w2_anchor[layoutIndex], layouts.w2_fold[layoutIndex], 0],
      [layouts.w3_rows[layoutIndex], layouts.w3_cols[layoutIndex], layouts.w3_anchor[layoutIndex], layouts.w3_fold[layoutIndex], 0]
      ];

    var u3 = layouts.uhd30[layoutIndex];
    var u6 = layouts.uhd60[layoutIndex];

    console.log(wallParams);

    // create Output List window, add head elements 
    var outputList = window.open("", "_blank", "width=640,height=560, location=0, resizable=yes");
    
    
    var opListHead = outputList.document.head;
    
    var title = outputList.document.createElement("title");
    title.text = strs.opList;    
    $(opListHead).append(title);

    var metaData = outputList.document.createElement("meta");
    metaData.setAttribute("content", "text/html; charset=UTF-8");    
    $(opListHead).append(metaData);

    var ss = outputList.document.createElement("style");
    metaData.setAttribute("type", "text/css");    
    $(opListHead).append(ss);
    
    var styles =  "body {background-color:#c0c0d3;font:normal 12px Helvetica, Arial, sans-serif;}";
    styles     += "td {text-align:center;font-weight:bold;width:48px;height:27px;margin:1px}";
    $(ss).append(styles);    

    // add body elements

    var opListBody = outputList.document.body;
    
    var printClose = outputList.document.createElement("div");
    printClose.setAttribute("style", "float:right;margin:6px;");    
    $(opListBody).append(printClose);

    var linkPrint = outputList.document.createElement("a");
    linkPrint.setAttribute("href", "#");    
    linkPrint.setAttribute("onClick", "window.print()");    
    linkPrint.innerText = strs.winPrint;    
    $(printClose).append(linkPrint);

    var linkClose = outputList.document.createElement("a");
    linkClose.setAttribute("href", "#");    
    linkClose.setAttribute("onClick", "window.close()");    
    linkClose.innerText = strs.winClose;	
	$(printClose).append("&nbsp;&nbsp;&#124;&nbsp;&nbsp;");
    $(printClose).append(linkClose);
    
    var divClear = outputList.document.createElement("div");
    divClear.setAttribute("style", "clear:both;");    
    $(opListBody).append(divClear);

    var headingMain = outputList.document.createElement("div");
    headingMain.setAttribute("class", "demoHead");    
    $(opListBody).append(headingMain);

    var bodyMain = outputList.document.createElement("div");
    bodyMain.setAttribute("class", "swMain");    
    $(opListBody).append(bodyMain);

    var mainHdg = outputList.document.createElement("h1");
    mainHdg.setAttribute("style", "text-transform:uppercase;");    
    mainHdg.innerText = strs.opList;    
    $(headingMain).append(mainHdg);
    $(headingMain).append("<hr />");   

// add output connection tables    
    var v = 0;
    for (var walls=0; walls<n; ++walls){
        
        var hdgWalln = outputList.document.createElement("h2");
        hdgWalln.setAttribute("class", "StepTitle");    
        hdgWalln.innerText = strs.wall + (walls + 1);    
        $(bodyMain).append(hdgWalln);  

        var tblWalln     = outputList.document.createElement("table");
        tblWalln.setAttribute("class", "StepTitle");    
        var tblBodyWalln = outputList.document.createElement("tbody");
        var nextRowStart = 6;

        var a      = wallParams[walls][2];      // anchor output for this wall
        
        if ((a != 1) && (o == "4K/UHD @ 30Hz")){
            for (var k = 0; k < outputs.length; k++) {
                if (outputs[k] >= a){
                    v = k;                    
                    break;
                }
            }
        }        
        console.log("V is now " + v);
        
        var folded = wallParams[walls][3];      // does this wall use folding?
        if (folded == 1){
            nextRowStart = 3;
        }
        var isLong = wallParams[walls][4];      // is this a long wall?
        if (isLong == 1){
            nextRowStart = 12;
        }

        for (var j = 1; j <= wallParams[walls][0]; j++) {
            // wall row creation
            var row = outputList.document.createElement("tr");

            for (var i = 0; i < wallParams[walls][1]; i++) {
            // create element <td> representing wall cube/tile 
            // Make text node the contents of <td> element
              var cell = outputList.document.createElement("td");    
              var v1 =  outputs[v];
              var v2 =  outputs[Math.ceil((a / multiplier))-1] + (i * multiplier) + (nextRowStart * (j-1));
              console.log("v1 = " + v1 + "; v2 = " + v2);                 

              if ((o == "4K/UHD @ 30Hz") && ((v1 == v2 - 1) || (v1 == v2 + 1))){
                  cTxt = v1;
                  
              }else{
                  cTxt = v2;
              }
              
              if((o == "2K/HD") && (u3 == 1)){  // 2K output timing with a UHD-friendly layout 
                 var v3 = 3 * Math.floor(i / 3);
                 cTxt = v2 + v3;
              }
              
              // special case: 4 woms, layout #62, wall #2 (3x 3 @13)
              if((walls == 1) && (layoutIndex == 61) && (v > 14)){   
                 cTxt = v2 + 3;
              }

              var cellText = outputList.document.createTextNode(cTxt); 

            cell.appendChild(cellText);
            // put <td> at end of the table row
            row.appendChild(cell);
            v++;
        }

            //row added to end of table body
            tblBodyWalln.appendChild(row);
            if(i < (outputs.length / wallParams[walls][0]) && (multiplier == 2)){ // uhd30 wall < 3 columns wide
            v += (3 - i);
            }
        }

        // append the <tbody> inside the <table>
        tblWalln.appendChild(tblBodyWalln);
        // put <table> in the <body>
        $(bodyMain).append(tblWalln);
        // tbl border attribute to 1
        tblWalln.setAttribute("border", "1");
        }
    }
    
function showAllSlotSelectors()
{	

$(document).ready(function(){
	$('#slot2')
    .show()
;
	$('#slot3')
    .show()
;
	$('#slot4')
    .show()
;
}); 

}

function somSelectorAddOptions(){	
var s = document.getElementById('somCount');
if (s.options.length < 3){
	s.options[s.options.length]= new Option('2', '2');
	s.options[s.options.length]= new Option('3', '3');
    }
}

function somSelectorRemoveOptions(){
	
// document.getElementById('somCount').options.length = 0;

$(document).ready(function(){
	$('#somCount')
    .empty()
    .append('<option selected="selected" value=0>0</option>')
    .append('<option value=1>1</option>')
;
}); 

}

function StrGet(msgCat, token, retVal){

    if (msgCat[token] == null)
    {
        if (arguments.length >= 3)
            return retVal
        else
        {
            alert("StrGet: unknown string token:" + token)
            return "__" + token + "__"
        }
    }
    return msgCat[token]
}

function StrPrint(msgCat, token, retVal){

    if (msgCat[token] == null)
    {
        if (arguments.length >= 3)
            return retVal
        else
        {
            alert("StrGet: unknown string token:" + token)
            return "__" + token + "__"
        }
    }
    
    document.write(msgCat[token]);
        
}
