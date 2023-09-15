<?php
// In a real application, you would connect to a database here

// Sample data store (replace with database operations)
$records = [];

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Read operation
    echo json_encode($records);
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Create operation
    $data = json_decode(file_get_contents('php://input'), true);
    $records[] = $data;
    echo json_encode(['message' => 'Record created successfully']);
} elseif ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    // Update operation
    $data = json_decode(file_get_contents('php://input'), true);
    $id = $data['id'];
    foreach ($records as &$record) {
        if ($record['id'] == $id) {
            $record = $data;
            echo json_encode(['message' => 'Record updated successfully']);
            exit();
        }
    }
    echo json_encode(['error' => 'Record not found']);
} elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    // Delete operation
    $id = $_GET['id'];
    $index = -1;
    foreach ($records as $key => $record) {
        if ($record['id'] == $id) {
            $index = $key;
            break;
        }
    }
    if ($index !== -1) {
        unset($records[$index]);
        $records = array_values($records);
        echo json_encode(['message' => 'Record deleted successfully']);
    } else {
        echo json_encode(['error' => 'Record not found']);
    }
}
?>