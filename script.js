document.querySelector('.img-btn').addEventListener('click', function()
	{
		document.querySelector('.cont').classList.toggle('s-signup')
	}
);

$.ajax({
	type: "POST",
	url: "https://reqbin.com/echo/post/json",
	data: `{
	  "Id": 78912,
	  "Customer": "Jason Sweet",
	}`,
	success: function (result) {
	   console.log(result);
	},
	dataType: "json"
  });