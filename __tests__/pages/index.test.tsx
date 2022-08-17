import { render, screen } from "@testing-library/react"
import Home from "../../pages"

describe("Home", () => {
  it("renders expected", () => {
    render(<Home/>)
    expect(screen.getByTestId("home-heading")).toHaveTextContent("Apex Legends Lookup")
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByTestId("username-input")).toBeInTheDocument()
  })
})