const Task = require('../models').Task;

const create = (req, res) => {
    const task = req.body;
    Task.create(task).then(newTask => {
        res.json({ taskId: newTask.id });
    }).catch(error => {
        res.status(400).json(error);
    });
};

const update = (req, res) => {
    const taskId = req.params.taskId;
    Task.findById(taskId).then(task => {
      if (!task) {
        return res.status(404).json({ message: 'Task not found.' });
      }

      return task.update({
        name: req.body.name,
        isCompleted: req.body.isCompleted
      }).then(task => res.status(200).send(task)).catch(error => res.status(500).json(error));
    }).catch(error => res.status(500).json(error));
};

const deleteTask = (req, res) => {
    const taskId = req.params.taskId;
    Task.findById(taskId).then(task => {
      if (!task) {
        return res.status(404).json({ message: 'Task not found.' });
      }

      return task.destroy().
        then(() => res.status(204).json()).
        catch(error => res.status(500).json(error));

    }).catch(error => res.status(500).json(error));
};

const getTasks = (req, res) => {
  Task.findAll().then(tasks => res.status(200).json(tasks)).
    catch(error => res.status(500).json(error));
};

const getTaskById = (req, res) => {
  Task.findById(req.params.taskId).then(task => {
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    return res.status(200).json(task);
  }).catch(error => res.status(500).json(error));
};

module.exports = {
  create,
  update,
  deleteTask,
  getTasks,
  getTaskById
};

