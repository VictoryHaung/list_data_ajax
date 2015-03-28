<?php
if(isset($_POST['page'])){
	echo json_encode(array('page' => $_POST['page']));
}
?>
