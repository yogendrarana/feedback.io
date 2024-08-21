"use client"

import React from 'react'
import { Form } from '@feedbackio/form'
import { buttonVariants } from '../ui/button'

const FeedbackClientWrapper = () => {
    return (
        <Form
            clientId={process.env.NEXT_PUBLIC_FEEDBACKIO_CLIENT_ID!}
            projectId={process.env.NEXT_PUBLIC_FEEDBACKIO_PROJECT_ID!}
            triggerClassName={buttonVariants({
                variant: "outline",
                className: "group",
            })}
        />
    )
}

export default FeedbackClientWrapper;