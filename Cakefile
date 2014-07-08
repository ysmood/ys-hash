fs = require 'fs'
spawn = require 'win-spawn'

mocha_bin = 'node_modules/.bin/mocha'
coffee_bin = 'node_modules/.bin/coffee'

task 'test', 'Test APIs', ->
	spawn(mocha_bin, [
		'--require', 'coffee-script/register'
		'-R', 'spec'
		'test/basic.coffee'
	], {
		stdio: 'inherit'
	}).on 'exit', (code) ->
		if code != 0
			process.exit code

task 'collision', '10 seconds collision test', ->
	spawn coffee_bin, [
		'test/collision.coffee'
	], {
		stdio: 'inherit'
	}

task 'build', 'Build project', ->
	spawn coffee_bin, [
		'-o', 'dist'
		'-c', 'src/jhash.coffee'
	], {
		stdio: 'inherit'
	}

task 'benchmark', 'Simple benchmark', ->
	require 'coffee-script/register'
	_ = require 'underscore'
	jhash = require './src/jhash'

	path = 'test/rand_file.bin'
	buf = fs.readFileSync path
	file_size = fs.statSync(path).size

	count = 0
	start_time = Date.now()
	span = 0

	while span < 10
		if count % 1000 == 0
			span = (Date.now() - start_time) / 1000
		jhash.hash buf
		count++

	console.log """
	#{Math.round(count / span)} ops/s.
	Avr. file size #{file_size}B.
	"""
