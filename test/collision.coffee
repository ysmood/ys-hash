#!node_modules/.bin/coffee

_ = require 'underscore'
ys_hash = require '../src/ys_hash'
fs = require 'fs-extra'

test = (hash_fun) ->
	arr = []
	for i in [0 ... _.random(1, 10000)]
		# It's hard to collision, so I decreaed the random byte value
		# from `2 ** 8` to `2 ** 3`
		arr.push _.random(0, 2 ** 8)

	hash_fun.call ys_hash, arr

batch = (hash_fun, name) ->
	len = 50000
	time = _.now()
	res = {}
	samples = []
	for i in [0 ... len]
		v = test(hash_fun)
		samples.push v
		res[v] = true

	ratio = (1 - _.size(res) / len) * 100
	sample = JSON.stringify(
		samples[0..10].map (el) ->
			el.toString(36)
	)
	time = (_.now() - time) / 1000

	console.log """
		task count: #{len}
		10 samples: #{sample}
		      time: #{time}s
		collisions: #{ratio}% #{len - _.size(res)}
	"""

ys_hash.set_mask_len 20
batch ys_hash.hash, 'hash_buffer'