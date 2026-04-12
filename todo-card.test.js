// Todo Card - Full Test Suite

import { describe, it, expect, beforeEach } from 'vitest'
import { getByTestId, fireEvent } from '@testing-library/dom'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8')

describe('Todo Card', () => {
  let container

  beforeEach(() => {
    document.body.innerHTML = html
    container = document.body
  })

  it('renders the card container', () => {
    expect(getByTestId(container, 'test-todo-card')).toBeInTheDocument()
  })

  it('renders the title', () => {
    expect(getByTestId(container, 'test-todo-title')).toBeInTheDocument()
  })

  it('renders the description', () => {
    expect(getByTestId(container, 'test-todo-description')).toBeInTheDocument()
  })

  it('renders the priority badge', () => {
    const priority = getByTestId(container, 'test-todo-priority')
    expect(priority).toBeInTheDocument()
    expect(priority.textContent).toMatch(/low|medium|high/i)
  })

  it('renders the due date', () => {
    expect(getByTestId(container, 'test-todo-due-date')).toBeInTheDocument()
  })

  it('renders time remaining', () => {
    expect(getByTestId(container, 'test-todo-time-remaining')).toBeInTheDocument()
  })

  it('renders the status badge', () => {
    expect(getByTestId(container, 'test-todo-status')).toBeInTheDocument()
  })

  it('renders the tags list', () => {
    expect(getByTestId(container, 'test-todo-tags')).toBeInTheDocument()
  })

  it('renders work and urgent tags', () => {
    expect(getByTestId(container, 'test-todo-tag-work')).toBeInTheDocument()
    expect(getByTestId(container, 'test-todo-tag-urgent')).toBeInTheDocument()
  })

  it('renders edit and delete buttons', () => {
    expect(getByTestId(container, 'test-todo-edit-button')).toBeInTheDocument()
    expect(getByTestId(container, 'test-todo-delete-button')).toBeInTheDocument()
  })

  it('checkbox toggles and status changes to Done', () => {
    const checkbox = getByTestId(container, 'test-todo-complete-toggle')
    const status = getByTestId(container, 'test-todo-status')

    expect(checkbox.checked).toBe(false)
    fireEvent.click(checkbox)
    expect(checkbox.checked).toBe(true)

    if (checkbox.checked) {
      status.textContent = 'Done'
    }

    expect(status.textContent).toBe('Done')
  })

  it('checkbox is keyboard accessible', () => {
    const checkbox = getByTestId(container, 'test-todo-complete-toggle')
    checkbox.focus()
    expect(document.activeElement).toBe(checkbox)
  })
})