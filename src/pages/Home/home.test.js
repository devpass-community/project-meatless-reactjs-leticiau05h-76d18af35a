
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '.'

jest.mock('react-router-dom', () => ({
  Link: 'a',
}));

describe('<Home />', () => {
  test('should render home page', () => {
    render(<Home />)
    expect(screen.getByTestId('meatless-pageHome')).toBeInTheDocument()
  })
  
  test('Restaurant List - should render list with restaurant cards', () => {
    render(<Home />)
    const list = screen.getByTestId('meatless-restaurantList')
    const restaurantCard = screen.getByTestId('meatless-restaurantCard')
    
    expect(list).toContainElement(restaurantCard)
    expect(restaurantCard).not.toContainElement(list)
  })
})

