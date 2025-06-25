"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Task_1 = __importDefault(require("../models/Task"));
const router = (0, express_1.Router)();
// GET /api/tasks?status=Active&priority=High
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { status, priority } = req.query;
        const filter = {};
        if (status)
            filter.status = status;
        if (priority)
            filter.priority = priority;
        const tasks = yield Task_1.default.find(filter).sort({ dueDate: 1 });
        res.json(tasks);
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to fetch tasks' });
    }
}));
// POST /api/tasks
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, dueDate, priority } = req.body;
        if (!title || !dueDate || !priority) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        const task = new Task_1.default({
            title,
            dueDate,
            priority,
            status: 'Active',
            archived: false,
        });
        yield task.save();
        res.status(201).json(task);
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to create task' });
    }
}));
// PUT /api/tasks/:id
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const update = req.body;
        const task = yield Task_1.default.findByIdAndUpdate(id, update, { new: true });
        if (!task)
            return res.status(404).json({ error: 'Task not found' });
        res.json(task);
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to update task' });
    }
}));
// DELETE /api/tasks/:id
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const task = yield Task_1.default.findByIdAndDelete(id);
        if (!task)
            return res.status(404).json({ error: 'Task not found' });
        res.json({ message: 'Task deleted' });
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to delete task' });
    }
}));
exports.default = router;
