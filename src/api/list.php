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

	//接受前端传来的数据
	$total = isset($_GET['total'])? $_GET['total']:'';
	$pageNo = isset($_GET['pageNo'])? $_GET['pageNo']:1;
	$qty = isset($_GET['qty'])? $_GET['qty']:20;

	//语句
	$sql = "select * from list " ;

	if($total){
		$sql .="where total='$total'";
	};

	//查询数据库
	$result = $conn->query($sql);
	$result = $result->fetch_all(MYSQLI_ASSOC);
	
	//处理数据
	$res = array(
		'data' =>array_slice ($result,($pageNo-1)*$qty,$qty),
		'qty' =>$qty,
		'total' =>count($result)
	);

	//输出
	echo json_encode($res,JSON_UNESCAPED_UNICODE);

?>