
def ys_hash arr
	arr.reduce(8388617) { |sum, n|
		((sum << 1 | sum >> 31) & 0xffffffff) ^ n
	}.to_s(36)
end

# Test
arr = (0..5000).map { rand 2 ** 8 }
puts ys_hash(arr)