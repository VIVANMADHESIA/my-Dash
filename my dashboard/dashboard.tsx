import React, { useState } from 'react'
import { Bell, MessageSquare, Zap, Shield, PlusCircle, MoreHorizontal, ChevronDown, Search, Heart, Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"

export default function Dashboard() {
  const [newContactName, setNewContactName] = useState('')
  const [newProjectName, setNewProjectName] = useState('')
  const [newTaskName, setNewTaskName] = useState('')
  const [contacts, setContacts] = useState([])
  const [projects, setProjects] = useState([])
  const [tasks, setTasks] = useState([])

  const handleCreate = () => {
    toast({
      title: "Create New Item",
      description: "This would open a modal or navigate to a new page for creating content.",
    })
  }

  const handleNewContact = () => {
    if (newContactName.trim()) {
      setContacts([...contacts, newContactName.trim()])
      setNewContactName('')
      toast({
        title: "New Contact Added",
        description: `${newContactName.trim()} has been added to your contacts.`,
      })
    }
  }

  const handleNewProject = () => {
    if (newProjectName.trim()) {
      setProjects([...projects, newProjectName.trim()])
      setNewProjectName('')
      toast({
        title: "New Project Created",
        description: `Project "${newProjectName.trim()}" has been created.`,
      })
    }
  }

  const handleNewTask = () => {
    if (newTaskName.trim()) {
      setTasks([...tasks, { name: newTaskName.trim(), done: false }])
      setNewTaskName('')
      toast({
        title: "New Task Added",
        description: `Task "${newTaskName.trim()}" has been added to your list.`,
      })
    }
  }

  const handlePostUpdate = () => {
    toast({
      title: "Update Posted",
      description: "Your update has been posted to the newsfeed.",
    })
  }

  return (
    <div className="flex flex-col h-screen">
      {/* Top Navigation */}
      <nav className="flex items-center justify-between p-4 bg-white border-b">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="My Apps" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="myapps">My Apps</SelectItem>
              {/* Add more options as needed */}
            </SelectContent>
          </Select>
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">Explore</Button>
        </div>
        <div className="flex items-center space-x-2">
          <Input type="text" placeholder="Search for contacts or..." className="w-64" />
          <Button size="icon" variant="outline"><Bell className="h-4 w-4" /></Button>
          <Button size="icon" variant="outline"><MessageSquare className="h-4 w-4" /></Button>
          <div className="bg-gray-200 rounded-full px-2 py-1 text-xs font-bold">49</div>
          <Button size="icon" variant="outline"><Zap className="h-4 w-4" /></Button>
          <div className="flex items-center space-x-1">
            <Shield className="h-4 w-4" />
            <span className="text-sm font-medium">Sportykids Admin</span>
          </div>
          <Button onClick={handleCreate} className="bg-red-500 hover:bg-red-600 text-white">
            <PlusCircle className="mr-2 h-4 w-4" /> Create
          </Button>
          <Button variant="ghost">More</Button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-64 p-4 bg-gray-50 overflow-y-auto">
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Events</h2>
            {/* Event items would go here */}
            <Button variant="link" className="text-sm">Show All</Button>
          </div>
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">Contacts</h2>
              <Button onClick={handleNewContact} size="sm">+ New Contact</Button>
            </div>
            <Input
              type="text"
              placeholder="New contact name"
              value={newContactName}
              onChange={(e) => setNewContactName(e.target.value)}
              className="mb-2"
            />
            {contacts.map((contact, index) => (
              <div key={index} className="text-sm mb-1">{contact}</div>
            ))}
            <Button variant="link" className="text-sm">Show All</Button>
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">Projects</h2>
              <Button onClick={handleNewProject} size="sm">+ New Project</Button>
            </div>
            <Input
              type="text"
              placeholder="New project name"
              value={newProjectName}
              onChange={(e) => setNewProjectName(e.target.value)}
              className="mb-2"
            />
            {projects.map((project, index) => (
              <div key={index} className="text-sm mb-1">{project}</div>
            ))}
          </div>
        </div>

        {/* Center Content */}
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="mb-4">
            <Input type="text" placeholder="Sportykids Admin share some progress" className="w-full" />
            <div className="flex justify-between mt-2">
              <div>
                <Button variant="outline" size="sm">
                  Story Filters <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <Button onClick={handlePostUpdate} size="sm" className="bg-red-500 hover:bg-red-600 text-white">Post</Button>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow mb-4">
            <h3 className="text-lg font-semibold mb-2">NEWSFEED</h3>
            {/* Newsfeed items would go here */}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-64 p-4 bg-gray-50 overflow-y-auto">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">Boards</h2>
              <Button size="sm">+ New Board</Button>
            </div>
            {/* Board items would go here */}
            <Button variant="link" className="text-sm">Show All</Button>
          </div>
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">Personal Progress</h2>
              <Button variant="link" size="sm">Go to board</Button>
            </div>
            {/* Progress items would go here */}
            <Button variant="link" className="text-sm">Show All</Button>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Tasks</h2>
            <div className="flex space-x-2 mb-2">
              <Button size="sm" variant="outline">{tasks.filter(t => !t.done).length} To Do</Button>
              <Button size="sm" variant="outline">{tasks.filter(t => t.done).length} Done</Button>
              <Button size="sm" variant="outline">Filters</Button>
            </div>
            <div className="flex">
              <Input
                type="text"
                placeholder="Add your next task"
                value={newTaskName}
                onChange={(e) => setNewTaskName(e.target.value)}
                className="flex-1"
              />
              <Button onClick={handleNewTask} className="ml-2 bg-red-500 hover:bg-red-600 text-white">Save Task</Button>
            </div>
            {tasks.map((task, index) => (
              <div key={index} className="flex items-center mt-2">
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => {
                    const newTasks = [...tasks]
                    newTasks[index].done = !newTasks[index].done
                    setTasks(newTasks)
                  }}
                  className="mr-2"
                />
                <span className={task.done ? 'line-through' : ''}>{task.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}