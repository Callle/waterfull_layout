<?php

	header('Content-Type:application/json; charset=utf-8');

	/* 读取json数据*/
	$data = file_get_contents('data.json');

	/* 转换成PHP数组*/
	$data = json_decode($data);

	/* 根据页码计算offset*/
	$page = $_POST['page'];

	$pageSize = $_POST['pageSize'];

	/* 每页的数据*/
	$offset = ($page - 1) * $pageSize;

	/* 截取10条数据*/
	$result = array_slice($data, $offset, $pageSize);

	/* 翻页*/
	$page++;

	echo json_encode(array('page'=>$page, 'items'=>$result));

	sleep(1);

?>