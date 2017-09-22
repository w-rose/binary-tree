(function () {
	var BinaryTree = function () {
		var Node = function (key) {
			this.key = key
			this.left = null
			this.right = null
		}

		var root = null

		//构建二叉树，插入节点
		var insertNode = function (node, newNode) {
			if (newNode.key < node.key) {
				//插入节点的左边
				if (node.left === null) {
					node.left = newNode
				} else {
					insertNode(node.left, newNode)
				}
			} else {
				//插入节点的右边
				if (node.right === null) {
					node.right = newNode
				} else {
					insertNode(node.right, newNode)
				}
			}

		}

		//暴露一个插入函数
		this.insert = function (key) {
			var newNode = new Node(key)
			if (root === null) {
				root = newNode
				return
			}
			insertNode(root, newNode)
		}

		var inOrderTraverseNode = function (node, callback) {
			//遍历思想：左孩子-节点-右孩子
			if (node !== null) {
				inOrderTraverseNode(node.left, callback)
				callback(node.key)
				inOrderTraverseNode(node.right, callback)
			}
		}

		//暴露一个中序遍历接口
		this.inOrderTraverse = function (callback) {
			inOrderTraverseNode(root, callback)
		}


	}

	var nodes = [8, 3, 11, 14, 7, 6, 10]
	var binaryTree = new BinaryTree()
	nodes.forEach(function (num) {
		//构建二叉树
		binaryTree.insert(num)
	})
	binaryTree.inOrderTraverse(function (key) {
		console.log(key)
	})
})()