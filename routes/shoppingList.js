import express from 'express'
import {
  getShoppingList,
  postListItem,
  editListItem,
  deleteList
} from '../models/shoppingList.js'

const router = express.Router()

/* GET shopping list. */
router.get('/', async (req, res) => {
  const data = await getShoppingList()
  res.json({ success: true, payload: data })
})

router.post('/', async (req, res) => {
  const { listItem } = req.body
  const result = await postListItem(listItem)
  res.status(201).json({ success: true, payload: result })
})

router.patch('/:id', async (req, res) => {
  const id = req.params.id
  const editedListItem = await editListItem(id)
  res.json({ success: true, payload: editedListItem })
})

router.delete('/', async function (req, res) {
  const deletedList = await deleteList()
  res.json({ success: true, payload: deletedList })
})

export default router
