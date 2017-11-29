function isPalindrome(word)
{
	var str = "";
	if(word.length > 1)
	{
		return isPalindrome(word.substring(1)) + word.charAt(0);
	}
	else
	{
		return str += word.charAt(0);
	}
	
	return str;
}

var v = isPalindrome("MUM");
console.log(v);