// Generated by CoffeeScript 1.7.1
(function() {
  var Jhash,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Jhash = (function() {
    function Jhash() {
      this.set_mask_len = __bind(this.set_mask_len, this);
      this.set_symbols = __bind(this.set_symbols, this);
      this.set_symbols("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-._!'()*");
      this.set_mask_len(32);
    }

    Jhash.prototype.set_symbols = function(str) {

      /*
      			Control the char set.
       */
      return this.symbols = str.split('');
    };

    Jhash.prototype.set_mask_len = function(len) {

      /*
      			If you want shorter hash, this is the api.
       */
      if (len > 32) {
        len = 32;
      }
      this.init_sum = Math.pow(2, (len - len % 2) / 2);
      this.roll_len = len - 1;
      return this.mask = 0xffffffff >>> (32 - len);
    };

    Jhash.prototype.hash = function(data, is_number) {
      var h;
      if (is_number == null) {
        is_number = false;
      }

      /*
      			Auto check the data type and choose the corresponding method.
       */
      if (typeof data === 'string') {
        h = this.hash_str(data);
      } else if (Buffer.isBuffer(data) || Array.isArray(data)) {
        h = this.hash_arr(data);
      }
      h = h >>> 0;
      if (is_number) {
        return h;
      } else {
        return this.to_str(h);
      }
    };

    Jhash.prototype.hash_arr = function(arr) {

      /*
      			Also can hash a file buffer.
       */
      var h, i, _i, _len;
      h = this.init_sum;
      for (_i = 0, _len = arr.length; _i < _len; _i++) {
        i = arr[_i];
        h = this.sum(h, i);
      }
      return h;
    };

    Jhash.prototype.hash_str = function(str) {
      var h, i, len;
      h = this.init_sum;
      i = 0;
      len = str.length;
      while (i < len) {
        h = this.sum(h, str.charCodeAt(i++));
      }
      return h;
    };

    Jhash.prototype.sum = function(h, v) {
      return ((h << 1 | h >>> this.roll_len) & this.mask) ^ v;
    };

    Jhash.prototype.to_str = function(num) {
      var base, s, str;
      str = '';
      base = this.symbols.length;
      while (num >= base) {
        s = num % base;
        str = this.symbols[s] + str;
        num = (num - s) / base;
      }
      str = this.symbols[num] + str;
      return str;
    };

    return Jhash;

  })();

  if (typeof module === "object" && module && typeof module.exports === "object") {
    global.Jhash = Jhash;
    module.exports = new Jhash;
  } else {
    if (typeof define === "function" && define.amd) {
      define(function() {
        return new Jhash;
      });
    } else {
      window.jhash = new Jhash;
    }
  }

}).call(this);
