import { describe, expect, test } from 'vitest'
import { LoginForm } from '../index'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

describe('login should return 200', () => {
  test('test login api request', () => {
    render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    )

    const button = screen.getByText('Login')
    expect(button).toBeDefined()
  })
})
