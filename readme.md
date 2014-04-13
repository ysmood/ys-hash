## YS Hash

A fast algorithm to hash string or binary file inspired by the JSW hash.
Not likes md5 or sha1, the hash sum it creates is only about 6 chars.

Useful when using it in the **URL** or **table lookup**.

#### Node

* Install

 ```shell
 npm install ys-hash
 ```

* Usage

 ```javascript
 var ys = require('ys-hash');
 ys.hash_str('test'); // output => '27wvh2'
 
 var fs = require('fs');
 ys.hash_arr(fs.readFileSync('a.jpg'));
 ```

#### Browser

Install it via [Bower][2]: `bower install ys-hash`.

Or download the js file from the release page: [Release][1].

```html
<script src='ys_hash.js'></script>
<script>
  ys_hash.hash_str('test'); // output => '27wvh2'
</script>
```

## Test

### Random Test

#### Compare to some other hash algorithms

```
****** ys_hash *******
     sample: ["jg0ayq","nz9fb0","oa9iz1","4w5egf","dt7dsv","9wkm25","duu2j2","solh6y","z6rnbl","aa8ebp","g568a2"]
       time: 6.836s
 collisions: 0.000999999999995449%

****** rotating_hash *******
     sample: ["ahuz3","2hxrf3","k68zy","3cdf61","2857v2","fgua","3216o4","2i69dz","1ehpfn","1y46pv","3m1r0h"]
       time: 7.154s
 collisions: 48.626000000000005%

****** bjb2_hash *******
     sample: ["sdflvy","-g2j5ix","-1dsjyy","sezbl2","-wye5kw","-bdfy0t","-mudsaj","-4f3shn","-z1mxsl","-165mmr","q5oh58"]
       time: 16.718s
 collisions: 0.002000000000002%

****** fnv_hash *******
     sample: ["4ct07k","-pdrz0h","me11fv","t9px7i","-y120s","251qw7","h83axv","tob69f","eonk6","-6dkeny","elxam6"]
       time: 16.787s
 collisions: 0.000999999999995449%

****** oat_hash *******
     sample: ["-fg1gqa","-2k0tg","a391j2","1jd98xw","2dw8oj","-uldzx3","-t9m4me","-5z57og","6m0uqx","-17q8t0j","u8m0lo"]
       time: 19.028s
 collisions: 0.000999999999995449%

****** jsw_hash *******
     sample: ["-hm4rfv","vehfuu","jwf2v0","5c2oq3","-9xs2xt","p1ho2c","-ri84uf","op47br","-13wvwp","ek12tv","hrc6ki"]
       time: 15.702s
 collisions: 0.002999999999997449%
```

## Road Map

* Add more test cases.

* Implement into other languages.

## The MIT License (MIT)

Apr 2014 ys


  [1]: https://github.com/ysmood/ys-hash/releases
  [2]: https://github.com/bower/bower
