// State Information For All Blocks
// Is the configuration of all 36-blocks in this state.
// One row represents the 8 configurations of the piece.
// Each piece information is in the form [p1x, p1y, p2x, p2y ... p6x, p6y]
var state_blocks = [
	[[0, 0, 1, 0, 1, 1, 1, 2, 1, 3, 2, 1], [0, 1, 0, 2, 1, 1, 2, 0, 2, 1, 3, 1], [0, 1, 1, 1, 1, 2, 2, 1, 3, 0, 3, 1], [0, 1, 1, 0, 1, 1, 1, 2, 1, 3, 2, 3], [0, 1, 1, 0, 1, 1, 2, 1, 3, 1, 3, 2], [0, 3, 1, 0, 1, 1, 1, 2, 1, 3, 2, 1], [0, 0, 0, 1, 1, 1, 2, 1, 2, 2, 3, 1], [0, 2, 1, 0, 1, 1, 1, 2, 1, 3, 2, 0]],
	[[0, 0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5], [0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0], [0, 0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5], [0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0], [0, 0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5], [0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0], [0, 0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5], [0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0]],
	[[0, 2, 0, 3, 0, 4, 1, 0, 1, 1, 1, 2], [0, 1, 1, 1, 2, 0, 2, 1, 3, 0, 4, 0], [0, 0, 1, 0, 2, 0, 2, 1, 3, 1, 4, 1], [0, 0, 0, 1, 0, 2, 1, 2, 1, 3, 1, 4], [0, 2, 0, 3, 0, 4, 1, 0, 1, 1, 1, 2], [0, 1, 1, 1, 2, 0, 2, 1, 3, 0, 4, 0], [0, 0, 1, 0, 2, 0, 2, 1, 3, 1, 4, 1], [0, 0, 0, 1, 0, 2, 1, 2, 1, 3, 1, 4]],
	[[0, 0, 0, 1, 1, 1, 1, 2, 1, 3, 2, 3], [0, 1, 0, 2, 1, 1, 2, 0, 2, 1, 3, 0], [0, 0, 1, 0, 1, 1, 1, 2, 2, 2, 2, 3], [0, 2, 1, 1, 1, 2, 2, 1, 3, 0, 3, 1], [0, 0, 1, 0, 1, 1, 2, 1, 3, 1, 3, 2], [0, 3, 1, 1, 1, 2, 1, 3, 2, 0, 2, 1], [0, 0, 0, 1, 1, 1, 2, 1, 2, 2, 3, 2], [0, 2, 0, 3, 1, 0, 1, 1, 1, 2, 2, 0]],
	[[0, 0, 0, 1, 0, 2, 1, 2, 2, 2, 3, 2], [0, 0, 0, 1, 0, 2, 1, 0, 2, 0, 3, 0], [0, 0, 1, 0, 2, 0, 2, 1, 2, 2, 2, 3], [0, 2, 1, 2, 2, 2, 3, 0, 3, 1, 3, 2], [0, 0, 0, 1, 0, 2, 0, 3, 1, 3, 2, 3], [0, 0, 1, 0, 2, 0, 3, 0, 3, 1, 3, 2], [0, 3, 1, 3, 2, 0, 2, 1, 2, 2, 2, 3], [0, 0, 0, 1, 0, 2, 0, 3, 1, 0, 2, 0]],
	[[0, 0, 1, 0, 1, 1, 1, 2, 1, 3, 1, 4], [0, 0, 0, 1, 1, 0, 2, 0, 3, 0, 4, 0], [0, 1, 1, 1, 2, 1, 3, 1, 4, 0, 4, 1], [0, 0, 0, 1, 0, 2, 0, 3, 0, 4, 1, 4], [0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 4, 1], [0, 4, 1, 0, 1, 1, 1, 2, 1, 3, 1, 4], [0, 0, 0, 1, 1, 1, 2, 1, 3, 1, 4, 1], [0, 0, 0, 1, 0, 2, 0, 3, 0, 4, 1, 0]],
	[[0, 0, 0, 1, 0, 2, 1, 2, 1, 3, 2, 2], [0, 1, 1, 0, 1, 1, 1, 2, 2, 0, 3, 0], [0, 1, 1, 0, 1, 1, 2, 1, 2, 2, 2, 3], [0, 2, 1, 2, 2, 0, 2, 1, 2, 2, 3, 1], [0, 0, 1, 0, 2, 0, 2, 1, 2, 2, 3, 1], [0, 2, 1, 2, 1, 3, 2, 0, 2, 1, 2, 2], [0, 1, 1, 0, 1, 1, 1, 2, 2, 2, 3, 2], [0, 1, 0, 2, 0, 3, 1, 0, 1, 1, 2, 1]],
	[[0, 0, 0, 2, 1, 0, 1, 1, 1, 2, 2, 1], [0, 0, 0, 1, 1, 1, 1, 2, 2, 0, 2, 1], [0, 1, 1, 0, 1, 1, 1, 2, 2, 0, 2, 2], [0, 1, 0, 2, 1, 0, 1, 1, 2, 1, 2, 2], [0, 0, 0, 2, 1, 0, 1, 1, 1, 2, 2, 1], [0, 0, 0, 1, 1, 1, 1, 2, 2, 0, 2, 1], [0, 1, 1, 0, 1, 1, 1, 2, 2, 0, 2, 2], [0, 1, 0, 2, 1, 0, 1, 1, 2, 1, 2, 2]],
	[[0, 1, 1, 1, 1, 2, 1, 3, 2, 0, 2, 1], [0, 0, 0, 1, 0, 3, 1, 1, 1, 2, 1, 3], [0, 0, 0, 1, 1, 1, 2, 0, 2, 1, 3, 0], [0, 0, 0, 1, 0, 2, 1, 0, 1, 2, 1, 3], [0, 0, 0, 1, 1, 0, 2, 0, 2, 1, 3, 1], [0, 0, 0, 2, 0, 3, 1, 0, 1, 1, 1, 2], [0, 0, 1, 0, 1, 1, 2, 1, 3, 0, 3, 1], [0, 1, 0, 2, 0, 3, 1, 0, 1, 1, 1, 3]],
	[[0, 1, 1, 0, 1, 1, 2, 0, 3, 0, 3, 1], [0, 0, 0, 1, 0, 3, 1, 1, 1, 2, 1, 3], [0, 0, 0, 1, 1, 1, 2, 0, 2, 1, 3, 0], [0, 0, 0, 1, 0, 2, 1, 0, 1, 2, 1, 3], [0, 0, 0, 1, 1, 0, 2, 0, 2, 1, 3, 1], [0, 0, 0, 2, 0, 3, 1, 0, 1, 1, 1, 2], [0, 0, 1, 0, 1, 1, 2, 1, 3, 0, 3, 1], [0, 1, 0, 2, 0, 3, 1, 0, 1, 1, 1, 3]],
	[[0, 0, 1, 0, 1, 1, 2, 1, 2, 2, 3, 1], [0, 2, 1, 1, 1, 2, 2, 0, 2, 1, 3, 0], [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3], [0, 2, 0, 3, 1, 1, 1, 2, 2, 0, 2, 1], [0, 0, 1, 0, 1, 1, 2, 1, 2, 2, 3, 1], [0, 2, 1, 1, 1, 2, 2, 0, 2, 1, 3, 0], [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3], [0, 2, 0, 3, 1, 1, 1, 2, 2, 0, 2, 1]],
	[[0, 1, 0, 2, 1, 2, 2, 0, 2, 1, 2, 2], [0, 0, 0, 1, 0, 2, 1, 0, 1, 2, 2, 0], [0, 0, 0, 1, 1, 0, 2, 0, 2, 1, 2, 2], [0, 2, 1, 0, 1, 2, 2, 0, 2, 1, 2, 2], [0, 0, 0, 1, 0, 2, 1, 2, 2, 1, 2, 2], [0, 0, 1, 0, 1, 2, 2, 0, 2, 1, 2, 2], [0, 0, 0, 1, 0, 2, 1, 0, 1, 2, 2, 2], [0, 0, 0, 1, 0, 2, 1, 0, 2, 0, 2, 1]],
	[[0, 2, 1, 0, 1, 1, 1, 2, 2, 1, 2, 2], [0, 0, 0, 1, 0, 2, 1, 1, 1, 2, 2, 1], [0, 0, 0, 1, 1, 0, 1, 1, 1, 2, 2, 0], [0, 1, 1, 0, 1, 1, 2, 0, 2, 1, 2, 2], [0, 1, 1, 1, 1, 2, 2, 0, 2, 1, 2, 2], [0, 1, 0, 2, 1, 0, 1, 1, 1, 2, 2, 2], [0, 0, 0, 1, 0, 2, 1, 0, 1, 1, 2, 1], [0, 0, 1, 0, 1, 1, 1, 2, 2, 0, 2, 1]],
	[[0, 0, 1, 0, 1, 1, 1, 2, 1, 3, 2, 2], [0, 1, 0, 2, 1, 0, 1, 1, 2, 1, 3, 1], [0, 1, 1, 1, 2, 1, 2, 2, 3, 0, 3, 1], [0, 2, 1, 0, 1, 1, 1, 2, 1, 3, 2, 3], [0, 1, 1, 1, 2, 0, 2, 1, 3, 1, 3, 2], [0, 3, 1, 0, 1, 1, 1, 2, 1, 3, 2, 2], [0, 0, 0, 1, 1, 1, 1, 2, 2, 1, 3, 1], [0, 1, 1, 0, 1, 1, 1, 2, 1, 3, 2, 0]],
	[[0, 1, 0, 2, 0, 3, 1, 1, 2, 0, 2, 1], [0, 2, 1, 0, 1, 1, 1, 2, 2, 0, 3, 0], [0, 0, 0, 1, 1, 1, 2, 1, 2, 2, 2, 3], [0, 2, 1, 2, 2, 0, 2, 1, 2, 2, 3, 0], [0, 0, 0, 1, 0, 2, 1, 2, 2, 2, 2, 3], [0, 0, 1, 0, 2, 0, 2, 1, 2, 2, 3, 2], [0, 2, 0, 3, 1, 2, 2, 0, 2, 1, 2, 2], [0, 0, 1, 0, 1, 1, 1, 2, 2, 2, 3, 2]],
	[[0, 1, 1, 1, 2, 0, 2, 1, 2, 2, 3, 1], [0, 1, 1, 0, 1, 1, 1, 2, 2, 1, 3, 1], [0, 1, 1, 0, 1, 1, 1, 2, 1, 3, 2, 1], [0, 2, 1, 0, 1, 1, 1, 2, 1, 3, 2, 2], [0, 1, 1, 1, 2, 0, 2, 1, 2, 2, 3, 1], [0, 1, 1, 0, 1, 1, 1, 2, 2, 1, 3, 1], [0, 1, 1, 0, 1, 1, 1, 2, 1, 3, 2, 1], [0, 2, 1, 0, 1, 1, 1, 2, 1, 3, 2, 2]],
	[[0, 1, 1, 1, 2, 0, 2, 1, 3, 1, 4, 1], [0, 0, 1, 0, 2, 0, 2, 1, 3, 0, 4, 0], [0, 2, 1, 0, 1, 1, 1, 2, 1, 3, 1, 4], [0, 0, 0, 1, 0, 2, 0, 3, 0, 4, 1, 2], [0, 1, 1, 1, 2, 0, 2, 1, 3, 1, 4, 1], [0, 0, 1, 0, 2, 0, 2, 1, 3, 0, 4, 0], [0, 2, 1, 0, 1, 1, 1, 2, 1, 3, 1, 4], [0, 0, 0, 1, 0, 2, 0, 3, 0, 4, 1, 2]],
	[[0, 0, 0, 1, 1, 0, 1, 1, 1, 2, 2, 1], [0, 1, 1, 0, 1, 1, 1, 2, 2, 1, 2, 2], [0, 1, 0, 2, 1, 0, 1, 1, 1, 2, 2, 1], [0, 1, 1, 0, 1, 1, 1, 2, 2, 0, 2, 1], [0, 0, 0, 1, 1, 0, 1, 1, 1, 2, 2, 1], [0, 1, 1, 0, 1, 1, 1, 2, 2, 1, 2, 2], [0, 1, 0, 2, 1, 0, 1, 1, 1, 2, 2, 1], [0, 1, 1, 0, 1, 1, 1, 2, 2, 0, 2, 1]],
	[[0, 2, 1, 0, 1, 1, 1, 2, 2, 0, 2, 2], [0, 0, 0, 2, 1, 0, 1, 1, 1, 2, 2, 0], [0, 0, 0, 1, 1, 1, 2, 0, 2, 1, 2, 2], [0, 0, 0, 1, 0, 2, 1, 1, 2, 1, 2, 2], [0, 0, 1, 0, 1, 1, 1, 2, 2, 0, 2, 2], [0, 1, 0, 2, 1, 1, 2, 0, 2, 1, 2, 2], [0, 0, 0, 2, 1, 0, 1, 1, 1, 2, 2, 2], [0, 0, 0, 1, 0, 2, 1, 1, 2, 0, 2, 1]],
	[[0, 0, 0, 1, 1, 0, 1, 1, 2, 0, 3, 0], [0, 0, 0, 1, 1, 0, 1, 1, 1, 2, 1, 3], [0, 1, 1, 1, 2, 0, 2, 1, 3, 0, 3, 1], [0, 0, 0, 1, 0, 2, 0, 3, 1, 2, 1, 3], [0, 0, 1, 0, 2, 0, 2, 1, 3, 0, 3, 1], [0, 2, 0, 3, 1, 0, 1, 1, 1, 2, 1, 3], [0, 0, 0, 1, 1, 0, 1, 1, 2, 1, 3, 1], [0, 0, 0, 1, 0, 2, 0, 3, 1, 0, 1, 1]],
	[[0, 0, 1, 0, 1, 1, 1, 2, 2, 1, 2, 2], [0, 2, 1, 0, 1, 1, 1, 2, 2, 0, 2, 1], [0, 0, 0, 1, 1, 1, 1, 2, 2, 1, 2, 2], [0, 1, 0, 2, 1, 0, 1, 1, 1, 2, 2, 0], [0, 0, 0, 1, 1, 0, 1, 1, 2, 1, 2, 2], [0, 1, 0, 2, 1, 1, 1, 2, 2, 0, 2, 1], [0, 0, 0, 1, 1, 0, 1, 1, 1, 2, 2, 2], [0, 1, 0, 2, 1, 0, 1, 1, 2, 0, 2, 1]],
	[[0, 0, 0, 2, 1, 0, 1, 1, 1, 2, 1, 3], [0, 0, 0, 1, 1, 0, 2, 0, 2, 1, 3, 0], [0, 1, 1, 0, 1, 1, 2, 1, 3, 0, 3, 1], [0, 0, 0, 1, 0, 2, 0, 3, 1, 1, 1, 3], [0, 0, 1, 0, 1, 1, 2, 0, 3, 0, 3, 1], [0, 1, 0, 3, 1, 0, 1, 1, 1, 2, 1, 3], [0, 0, 0, 1, 1, 1, 2, 0, 2, 1, 3, 1], [0, 0, 0, 1, 0, 2, 0, 3, 1, 0, 1, 2]],
	[[0, 0, 1, 0, 1, 1, 1, 2, 1, 3, 2, 0], [0, 0, 0, 1, 0, 2, 1, 1, 2, 1, 3, 1], [0, 1, 1, 1, 2, 1, 3, 0, 3, 1, 3, 2], [0, 3, 1, 0, 1, 1, 1, 2, 1, 3, 2, 3], [0, 0, 1, 0, 1, 1, 1, 2, 1, 3, 2, 0], [0, 0, 0, 1, 0, 2, 1, 1, 2, 1, 3, 1], [0, 1, 1, 1, 2, 1, 3, 0, 3, 1, 3, 2], [0, 3, 1, 0, 1, 1, 1, 2, 1, 3, 2, 3]],
	[[0, 0, 1, 0, 1, 1, 2, 1, 2, 2, 2, 3], [0, 1, 0, 2, 1, 0, 1, 1, 2, 0, 3, 0], [0, 2, 1, 2, 2, 1, 2, 2, 3, 0, 3, 1], [0, 0, 0, 1, 0, 2, 1, 2, 1, 3, 2, 3], [0, 0, 1, 0, 2, 0, 2, 1, 3, 1, 3, 2], [0, 3, 1, 2, 1, 3, 2, 0, 2, 1, 2, 2], [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 2], [0, 1, 0, 2, 0, 3, 1, 0, 1, 1, 2, 0]],
	[[0, 2, 1, 0, 1, 1, 1, 2, 1, 3, 2, 1], [0, 1, 1, 1, 1, 2, 2, 0, 2, 1, 3, 1], [0, 1, 1, 0, 1, 1, 1, 2, 1, 3, 2, 2], [0, 1, 1, 0, 1, 1, 2, 1, 2, 2, 3, 1], [0, 2, 1, 0, 1, 1, 1, 2, 1, 3, 2, 1], [0, 1, 1, 1, 1, 2, 2, 0, 2, 1, 3, 1], [0, 1, 1, 0, 1, 1, 1, 2, 1, 3, 2, 2], [0, 1, 1, 0, 1, 1, 2, 1, 2, 2, 3, 1]],
	[[0, 0, 0, 1, 0, 2, 0, 3, 1, 3, 1, 4], [0, 1, 1, 0, 1, 1, 2, 0, 3, 0, 4, 0], [0, 0, 0, 1, 1, 1, 1, 2, 1, 3, 1, 4], [0, 1, 1, 1, 2, 1, 3, 0, 3, 1, 4, 0], [0, 0, 1, 0, 2, 0, 3, 0, 3, 1, 4, 1], [0, 3, 0, 4, 1, 0, 1, 1, 1, 2, 1, 3], [0, 0, 1, 0, 1, 1, 2, 1, 3, 1, 4, 1], [0, 1, 0, 2, 0, 3, 0, 4, 1, 0, 1, 1]],
	[[0, 0, 1, 0, 1, 1, 2, 1, 2, 2, 3, 2], [0, 2, 1, 1, 1, 2, 2, 0, 2, 1, 3, 0], [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3], [0, 2, 0, 3, 1, 1, 1, 2, 2, 0, 2, 1], [0, 0, 1, 0, 1, 1, 2, 1, 2, 2, 3, 2], [0, 2, 1, 1, 1, 2, 2, 0, 2, 1, 3, 0], [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3], [0, 2, 0, 3, 1, 1, 1, 2, 2, 0, 2, 1]],
	[[0, 2, 1, 0, 1, 1, 1, 2, 2, 2, 3, 2], [0, 0, 1, 0, 1, 1, 1, 2, 2, 0, 3, 0], [0, 1, 1, 1, 2, 0, 2, 1, 2, 2, 2, 3], [0, 2, 1, 2, 2, 0, 2, 1, 2, 2, 3, 2], [0, 0, 0, 1, 0, 2, 0, 3, 1, 2, 2, 2], [0, 0, 1, 0, 2, 0, 2, 1, 2, 2, 3, 0], [0, 2, 1, 2, 2, 0, 2, 1, 2, 2, 2, 3], [0, 0, 0, 1, 0, 2, 0, 3, 1, 1, 2, 1]],
	[[0, 1, 1, 0, 1, 1, 2, 0, 2, 1, 3, 1], [0, 0, 1, 0, 1, 1, 2, 0, 2, 1, 3, 0], [0, 1, 0, 2, 1, 0, 1, 1, 1, 2, 1, 3], [0, 0, 0, 1, 0, 2, 0, 3, 1, 1, 1, 2], [0, 1, 1, 0, 1, 1, 2, 0, 2, 1, 3, 1], [0, 0, 1, 0, 1, 1, 2, 0, 2, 1, 3, 0], [0, 1, 0, 2, 1, 0, 1, 1, 1, 2, 1, 3], [0, 0, 0, 1, 0, 2, 0, 3, 1, 1, 1, 2]],
	[[0, 0, 0, 1, 1, 0, 2, 0, 3, 0, 3, 1], [0, 0, 0, 3, 1, 0, 1, 1, 1, 2, 1, 3], [0, 0, 0, 1, 1, 1, 2, 1, 3, 0, 3, 1], [0, 0, 0, 1, 0, 2, 0, 3, 1, 0, 1, 3], [0, 0, 0, 1, 1, 0, 2, 0, 3, 0, 3, 1], [0, 0, 0, 3, 1, 0, 1, 1, 1, 2, 1, 3], [0, 0, 0, 1, 1, 1, 2, 1, 3, 0, 3, 1], [0, 0, 0, 1, 0, 2, 0, 3, 1, 0, 1, 3]],
	[[0, 1, 1, 0, 1, 1, 1, 2, 1, 3, 1, 4], [0, 0, 1, 0, 1, 1, 2, 0, 3, 0, 4, 0], [0, 1, 1, 1, 2, 1, 3, 0, 3, 1, 4, 1], [0, 0, 0, 1, 0, 2, 0, 3, 0, 4, 1, 3], [0, 0, 1, 0, 2, 0, 3, 0, 3, 1, 4, 0], [0, 3, 1, 0, 1, 1, 1, 2, 1, 3, 1, 4], [0, 1, 1, 0, 1, 1, 2, 1, 3, 1, 4, 1], [0, 0, 0, 1, 0, 2, 0, 3, 0, 4, 1, 1]],
	[[0, 1, 0, 2, 1, 1, 2, 1, 3, 0, 3, 1], [0, 0, 1, 0, 1, 1, 1, 2, 1, 3, 2, 3], [0, 0, 0, 1, 1, 1, 2, 1, 3, 1, 3, 2], [0, 3, 1, 0, 1, 1, 1, 2, 1, 3, 2, 0], [0, 1, 0, 2, 1, 1, 2, 1, 3, 0, 3, 1], [0, 0, 1, 0, 1, 1, 1, 2, 1, 3, 2, 3], [0, 0, 0, 1, 1, 1, 2, 1, 3, 1, 3, 2], [0, 3, 1, 0, 1, 1, 1, 2, 1, 3, 2, 0]],
	[[0, 0, 0, 1, 1, 0, 1, 1, 2, 0, 2, 1], [0, 0, 0, 1, 0, 2, 1, 0, 1, 1, 1, 2], [0, 0, 0, 1, 1, 0, 1, 1, 2, 0, 2, 1], [0, 0, 0, 1, 0, 2, 1, 0, 1, 1, 1, 2], [0, 0, 0, 1, 1, 0, 1, 1, 2, 0, 2, 1], [0, 0, 0, 1, 0, 2, 1, 0, 1, 1, 1, 2], [0, 0, 0, 1, 1, 0, 1, 1, 2, 0, 2, 1], [0, 0, 0, 1, 0, 2, 1, 0, 1, 1, 1, 2]],
	[[0, 0, 1, 0, 1, 1, 2, 0, 2, 1, 2, 2], [0, 2, 1, 1, 1, 2, 2, 0, 2, 1, 2, 2], [0, 0, 0, 1, 0, 2, 1, 1, 1, 2, 2, 2], [0, 0, 0, 1, 0, 2, 1, 0, 1, 1, 2, 0], [0, 0, 0, 1, 0, 2, 1, 0, 1, 1, 2, 0], [0, 0, 1, 0, 1, 1, 2, 0, 2, 1, 2, 2], [0, 2, 1, 1, 1, 2, 2, 0, 2, 1, 2, 2], [0, 0, 0, 1, 0, 2, 1, 1, 1, 2, 2, 2]],
	[[0, 0, 0, 1, 0, 2, 1, 1, 1, 2, 1, 3], [0, 1, 1, 0, 1, 1, 2, 0, 2, 1, 3, 0], [0, 0, 1, 0, 1, 1, 2, 0, 2, 1, 3, 1], [0, 1, 0, 2, 0, 3, 1, 0, 1, 1, 1, 2], [0, 0, 0, 1, 0, 2, 1, 1, 1, 2, 1, 3], [0, 1, 1, 0, 1, 1, 2, 0, 2, 1, 3, 0], [0, 0, 1, 0, 1, 1, 2, 0, 2, 1, 3, 1], [0, 1, 0, 2, 0, 3, 1, 0, 1, 1, 1, 2]],
 	[[0, 0, 0, 1, 0, 2, 1, 1, 1, 2, 1, 3], [0, 1, 1, 0, 1, 1, 2, 0, 2, 1, 3, 0], [0, 0, 1, 0, 1, 1, 2, 0, 2, 1, 3, 1], [0, 1, 0, 2, 0, 3, 1, 0, 1, 1, 1, 2], [0, 0, 0, 1, 0, 2, 1, 1, 1, 2, 1, 3], [0, 1, 1, 0, 1, 1, 2, 0, 2, 1, 3, 0], [0, 0, 1, 0, 1, 1, 2, 0, 2, 1, 3, 1], [0, 1, 0, 2, 0, 3, 1, 0, 1, 1, 1, 2]]];

// Parameters and information for solving the problem.
// Used for the coloring aspect of this problem.
var bestColoring = new Array(36).fill(-1), bestScore = -1;
var currBoard = createBoard();

// Solves the state information for the Hexonimo Problem.
var numRows = 15;
var isVisited = new Array(36).fill(false);
var state;

// Create a board that has 15x15 squares and 3x3 inner.
// Everything is assigned -1 except for -999 in the middle.
function createBoard() {
	var newBoard = new Array(numRows);
	for(var i = 0; i < numRows; i++) {
		newBoard[i] = new Array(numRows);
		for(var j = 0; j < numRows; j++) {
			// Setup as -1 or -999 as the values inside.
			newBoard[i][j] = -1;
			if(i >= 6 && i <= 8 && j >= 6 && j <= 8) {
				newBoard[i][j] = -999;
			}
		}
	}
	return newBoard;
}

// Try to put the item (piece) into the board, with piece # pi, and at the location (x,y).
// Returns the new board with the piece in it if it is possible.  Otherwise, it must return
// null which means the piece cannot fit the board.
function tryPlacingPiece(board, piece, x, y, pi) {
	// Check to see if it is possible to put into the board first
	// Each part of the piece is tried.
	for(var i = 0; i < 12; i += 2) {
		var addX = piece[i];
		var addY = piece[i+1];
		if(x + addX >= 15 || y + addY >= 15 || board[x + addX][y + addY] == -999) {
			return null;
		}
	}

	// Put the pieces into the actual location.
	for(var i = 0; i < 12; i += 2) {
		var addX = piece[i];
		var addY = piece[i+1];
		board[x + addX][y + addY] = pi;
	}
	return board;
}

// Check to see if the entire board is filled.
// A board is filled if every value is not equal to -1.
function isFilled(board) {
	for(var i = 0; i < 15; i++) {
		for(var j = 0; j < 15; j++) {
			if(board[i][j] == -1) {
				return false;
			}
		}
	}
	return true;
}

// Solve the problem by giving the state.
// State has the board information, used (piece/orientation), last (last piece looked at, for 
// backtracking), and action (function to do).
function initHexonimoSolver() {
	return {"board": [createBoard()],
		"used": [],
		"last": [0, -1],
		"action": solveHexominoProblem};
}

// Find the first missing location (-1) on the board.
// Return the location (i,j) in the board, otherwise (-1, -1) for no missing location.
function findFirstMissingLocation(board) {
	for(var i = 0; i < 15; i++) {
		for(var j = 0; j < 15; j++) {
			if(board[i][j] == -1) {
				return [i, j];
			}
		}	
	}
	return [-1, -1];
}

// Solve the problem.
// Uses DFS to solve this by remembering the state and last location/piece used information
// Backtracks to the previous state if something is wrong with the board.
function solveHexominoProblem(state) {
	// Get state information.
	var board = state["board"][state["board"].length - 1];
	var used = state["used"];
	var lx = state["last"][0], ly = state["last"][1];

	// If it is filled, get the adjacency list
	// and then start coloring the graph.
	if(isFilled(board)) {
		state["adjList"] = createAdjacencyList(board);
		state["action"] = colorGraph;
	}
	else {
		// Get the xy location that is missing (at the top).
		var xy = findFirstMissingLocation(board);
		var x = xy[0], y = xy[1];

		// Go through each row and column of the piece list.
		for(var i = lx; i < 36; i++) {
			for(var j = ly + 1; j < 8; j++) {
				// If we have visited this before, skip it.
				// Otherwise, try to insert it into the board.
				if(!isVisited[i]) {
					// Insert into the board.
					isVisited[i] = true;
					var newBoard = tryPlacingPiece(copyMatrix(board), state_blocks[i][j], x - state_blocks[i][j][0], y - state_blocks[i][j][1], i);
					// If it is valid state, then push the new information and return.
					if(newBoard != null && dfsIsStillValid(board)) {
						state["board"].push(newBoard);
						used.push([i, j]);
						state["last"] = [0, -1];
						return state;
					}
					// Otherwise we have to leave this i-th node.
					isVisited[i] = false;
				}
			}
			ly = -1; // Used to start over again.
		}
		// Bad state to be in, must redo the last step.
		var lastUsed = used[used.length - 1];
		isVisited[lastUsed[0]] = false;
		state["board"].pop();
		state["used"].pop();
		state["last"] = lastUsed;
	}
	return state;
}

// This is the finished state, that the run ends with.
function done(state) {
	return state;
}

// Check to make sure this board is still valid.
// Board is valid if the groups of connected cells (are in multiples of 6). 
function dfsIsStillValid(board) {
	// Check if it has been visited before.
	var hasVisited = new Array(numRows);
	for(var i = 0; i < numRows; i++) {
		hasVisited[i] = new Array(numRows);
		for(var j = 0; j < numRows; j++) {
			if(board[i][j] != -1) {
				hasVisited[i][j] = true;
			}
			else {
				hasVisited[i][j] = false;
			}
		}
	}

	// Go through all squares and DFS the connected squares.
	// Count them all up and see if it is a multiple of 6.  IF it is,
	// Then it can continue on.  Otherwise, it is an invalid state.
	for(var i = 0; i < numRows; i++) {
		for(var j = 0; j < numRows; j++) {
			if(!hasVisited[i][j]) {
				var count = dfsCountConnectedSquares(hasVisited, i, j);
				if(count % 6 != 0) {
					return false;
				}
			}
		}
	}
	return true;
}

// Check how many connected squares are in the group starting at (i,j) location.
// Return the count of connected squares.
function dfsCountConnectedSquares(hasVisited, i, j) {
	var count = 1;
	// If out of bounds or already visited, end with 0 count.
	if(i < 0 || i >= numRows || j < 0 || j >= numRows || hasVisited[i][j]) {
		return 0;
	}
	else {
		// Visit this node and go through all 4 cardinal directions.
		hasVisited[i][j] = true;
		count += dfsCountConnectedSquares(hasVisited, i+1, j);
		count += dfsCountConnectedSquares(hasVisited, i, j+1);
		count += dfsCountConnectedSquares(hasVisited, i-1, j);
		count += dfsCountConnectedSquares(hasVisited, i, j-1);
		return count;
	}
}

// Create an adjacency list of the board.
// This is used to determine which vertices are touching other ones.
// Creates a bidirectional graph from the board where each node is the piece and 
// connected to other nodes (other pieces).
function createAdjacencyList(board) {
	// 36 states/36 nodes.
	var adjList = {};
	for(var i = 0; i < 36; i++) {
		adjList[i] = new Set();
	}

	// Go through each node, and if it is touching another connect them into
	// the adjacency list.
	for(var i = 0; i < numRows; i++) {
		for(var j = 0; j < numRows; j++) {
			if(board[i][j] != -999) {
				if(i + 1 < numRows && board[i + 1][j] != -999) {
					adjList[board[i][j]].add(board[i+1][j]);
					adjList[board[i+1][j]].add(board[i][j]);
				}
				if(j + 1 < numRows && board[i][j + 1] != -999) {
					adjList[board[i][j]].add(board[i][j+1]);
					adjList[board[i][j+1]].add(board[i][j]);
				}
			}
		}
	}
	
	// Remove yourself from the adjList if it somehow happened.
	for(var i = 0; i < 36; i++) {
		adjList[i].delete(i);
	}
	return adjList;
}

// Color the graph/state information
function colorGraph(state) {
	// If the result is found, end.
	if(state["result"] == null) {
		// Start entire graph with each piece having 3 possible colors.
		var sets = new Array(36);
		for(var i = 0; i < 36; i++) {
			sets[i] = new Set([0, 1, 2]);
		}

		// Setup each call with a maximum amount of misses.
		var maxMisses;
		for(maxMisses = 0; maxMisses < 36; maxMisses++) {
			if(colorGraphHelper(sets, state.adjList, 0, maxMisses) == 0) {
				break;
			}
		}

		// Notify user that the system is done.
		state["result"] = "done";
		alert("Finished Coloring");
	}
	return state;
}

// Helper function to color the graph.
// Tries to find a proper way to color the graph (with 3 colors) if possible.
// Otherwise accept a specified # of misses.
function colorGraphHelper(colors, adjList, i, misses) {
	// 36 nodes looked at means to evaluate the state of the graph.
	if(i == 36) {
		evaluateFinal(colors);
		return 0;
	}
	else {
		// Get the information about colors/adjacency list.
		var adj = Array.from(adjList[i]);
		var arr = Array.from(colors[i]);

		// Go through possible valid colors.
		for(var j = 0; j < arr.length; j++) {
			// Remove this j-th color from this set and all other connected nodes.
			var oldc = copySets(colors);
			colors[i] = new Set([arr[j]]);
			for(var k = 0; k < adj.length; k++) {
				colors[adj[k]].delete(arr[j]);
			}

			// If it is a state of the graph that is fine, and not worse than the best
			// current state, then continue onward.  
			if(evaluateCurrent(colors) > bestScore) {
				colorGraphHelper(colors, adjList, i+1, misses);
			}

			// Restore the previous state.
			colors = oldc;
			colors[i].delete(arr[j]);
		} 

		// If you are allowed misses, recolor this one a different color
		// Then continue on.
		if(misses > 0) {
			var newColors = copySets(colors);
			newColors[i] = new Set([3]);
			colorGraphHelper(newColors, adjList, i+1, misses - 1);
		}
	}
	return -1;
}

// Copy the list of sets of colors.
function copySets(sets) {
	var copys = new Array(36);
	for(var i = 0; i < 36; i++) {
		copys[i] = new Set();
		var arr = Array.from(sets[i]);
		for(var j = 0; j < arr.length; j++) {
			copys[i].add(arr[j]);
		}
	}
	return copys;
}

// Copy an entire array.
function copyArray(arr) {
	var newArr = new Array(arr.length);
	for(var i = 0; i < arr.length; i++) {
		newArr[i] = arr[i];
	}
	return newArr;
}

// Copy a 2-D array matrix.
function copyMatrix(mat) {
	var newMat = new Array(mat.length);
	for(var i = 0; i < mat.length; i++) {
		newMat[i] = new Array(mat[i].length);
		for(var j = 0; j < mat[i].length; j++) {
			newMat[i][j] = mat[i][j];
		}
	}
	return newMat;
}

// Evaluate the solution so far.
// As long as each node has at least one color, then it is fine.
// Return the number of nodes that are fine.
function evaluateCurrent(colors) {
	var score = 0;
	for(var i = 0; i < 36; i++) {
		if(colors[i].size > 0) {
			score++;
		}
	}
	return score;
}

// Evaluate the final solution so far.
// As long as each node has at least one color, then it is fine.
// Setup bestScore and bestColoring here with the best possible score.
function evaluateFinal(colors) {
	var score = evaluateCurrent(colors);
	if(score > bestScore) {
		bestScore = score;
		bestColoring = copyArray(colors);
	} 
}


// ------------------------------------------------------------------------------
//  Drawing Operations
// ------------------------------------------------------------------------------
// Setup function
// Creates the canvas and starts the manager to initialize all states.
function setup() {
	// Create canvas of size 600 px by 600 px.
	createCanvas(600, 600);

	// Adjust the frame rate to slow down the refresh process.
	frameRate(24);

	// Start the solver.
	state = initHexonimoSolver();
}


// Draw function
// Draws all things to the screen.
function draw() {
	drawTable(0, 0, state["board"][state["board"].length - 1]); 
	state = state.action(state);
}

// Draw Table Function
// Draws a grid of size of 150 rows by 12 items.
// Each item is 40 x 40 pixels in size.
function drawTable(initX, initY, board) {
	for(var i = 0; i < numRows; i++) {
		for(var j = 0; j < numRows; j++) {
			if(board[j][i] == -1) {
				fill(255, 255, 255);
			}
			else if(board[j][i] == -999) {
				fill(10, 10, 10);
			}
			else if(bestColoring[board[j][i]] != -1) {
				var col = Array.from(bestColoring[board[j][i]]);
				if(col.size > 0) {
					fill(0, 0, 0);
				}
				else {
					if(col[0] == 0) { fill(255, 0, 0); }
					else if(col[0] == 1) { fill(120, 120, 255); }
					else if(col[0] == 2) { fill(0, 130, 130); }
					else { fill(155, 155, 155); }
				}
			}
			else {
				fill(0, 0, 0);
			}
			square(initX + 40 * i, initY + 40 * j, 39);
		}
	}
}

function isInArray(arr, val) {
	return arr.indexOf(val) > -1;
}