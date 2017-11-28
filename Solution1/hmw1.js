function slow() 
{
	setImmediate(() => {for (let i = 0; i <= 5e8; i++) {} } );
		if (Math.random() > 0.5) 
		{
			return "Error";
		}
		return {id: 12345};

	
}
console.log(slow());

