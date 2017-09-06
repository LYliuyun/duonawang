<?php
	
	// 配置信息
	$servername = 'localhost';
	$username = 'root';
	$password = '';
	$database = 'h5-1704';

	//连接数据库
	$conn = new mysqli($servername,$username,$password,$database);

	// 设置编码格式
	$conn->set_charset('utf8');

	//获取前端传来的数据
	$hot = isset($_GET['hot'])? $_GET['hot']:'';
	$total = isset($_GET['total'])? $_GET['total']:'';

	// 查找所有用户信息
	$sql = "select * from list " ;

	if($hot){
		
		$sql .= "where hot='$hot'";
	};

	if($total){

		$sql .= "where total='$total'";
	};

	//查询数据库
	$result = $conn->query($sql);

	//截取
	$row = array_slice ($result->fetch_all(MYSQLI_ASSOC),0,5);

	//输出
	echo json_encode($row,JSON_UNESCAPED_UNICODE);
	





?>