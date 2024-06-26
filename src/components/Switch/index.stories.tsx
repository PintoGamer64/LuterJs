import type { Meta, StoryObj } from "@storybook/react"
import Switch from "."

const meta: Meta<typeof Switch> = {
    title: "Componentes/Switch",
    component: Switch,
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
        onChange: (value) => {console.log(value.target.checked)}
    }
}