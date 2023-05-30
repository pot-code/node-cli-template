import type { ZodIssue } from 'zod'

export function zodIssueToLogFields(issue: ZodIssue) {
  return {
    field: issue.path,
    reason: issue.message,
  }
}
