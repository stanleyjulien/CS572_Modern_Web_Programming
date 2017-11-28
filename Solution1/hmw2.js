function isPalindrome(word)
{
	var str;
	if(word.length > 1)
	{
		isPalindrome(substring(word,1));
	}
	else
	{
		str += word.charAt(0);
	}
	
	return str;
}

var v = isPalindrome("MUM");
console.log(v);