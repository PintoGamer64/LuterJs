import type { Meta, StoryObj } from "@storybook/react"  
import Slider from "."

const meta: Meta<typeof Slider> = {
    title: "Componentes/Slider",
    component: Slider,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        className: undefined,
        color: undefined,
        value: 25,
        properties: undefined,
        onChange(value) {value}
    }
}