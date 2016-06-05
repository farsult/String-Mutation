//  String Mutation may be freely distributed under the MIT license.

(function(global){

var SM = global.SM = function(v){
   if(!(this instanceof SM)){ return new SM(v); };

   if(typeof v !== "string"){ this.value = "" + v; };
   this.value = v;
};

SM.prototype.map = function(cb){
	var result = "";
    for(i in this.value){
      result += cb(this.value[i]);   
    };
    this.value = result;
    return this;	  
};
SM.prototype.splice = function(start, count, v){
	var split = this.value.split('');
	split.splice(start, count, v);
	this.value = split.join('');
	return this;
};
SM.prototype.indexOf = function(v, n){
    if(typeof n !== "number" && n !== undefined){ throw new Error("Invalid argument"); }
	
	var result = [];
	for(i in this.value){
		if(this.value[i]===v){ result.push(i); }; 
	};

    if(result.length == 0 || n>result.length){ return -1; };	    
    return n>0 ? Number(result[n-1]) : Number(result[0]);
};
SM.prototype.pop = function(){
	this.value = this.value.slice(0, -1);	
	return this;
};
SM.prototype.shift = function(){
	this.value = this.value.slice(1);
	return this;
};
SM.prototype.push = function(ch){
	this.value = this.value + ch;
	return this;
};
SM.prototype.unshift = function(ch){
    this.value = ch + this.value;
    return this;
};
SM.prototype.sort = function(){
	var result = [];
	for(i in this.value){
		result.push(this.value[i]);
	}
	this.value = result.sort().join('');
    return this;	
};
SM.prototype.reverse = function(){
	var args = arguments;
	if(args){
	    var split = this.value.split(args[0]);
		split.reverse();
		this.value = split.join(args[0]);
		return this;
	}else{
	    var result = "";
	    var l = this.value.length;
	      for(i=l-1; i>=0; i--){
	         result += this.value[i];		
	      };
        this.value = result;
	    return this;	
	};
};
SM.prototype.countChar = function(v){
	var count = 0;
	for(i in this.value){
		if(this.value[i]===v){ count++;}
	};
	return count;
};
SM.prototype.keys = function(){
   var obj = {};
   for(i in this.value){
   	  obj[i] = this.value[i];
   }
   return obj;
};
 
}(this));