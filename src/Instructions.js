import React from 'react'
import { Redirect, Link } from 'react-router-dom'

const Instructions = ({ location: { pathname } }) => {
  if (pathname !== '/instructions') {
    return <Redirect to="/instructions" />
  }
  return (
    <div style={{ width: '90%', margin: 'auto' }}>
      <section>
        <h2>Getting Started</h2>
        <p>Fork this CodeSandbox to get started.</p>
        <a href="https://codesandbox.io/s/ovonylqp69">
          <img
            alt="Edit React Developer Test"
            src="https://codesandbox.io/static/img/play-codesandbox.svg"
          />
        </a>

        <p>
          A <strong>Requests</strong> component has been
          created for you as a starting place. Feel free to
          create additional files or use external libraries
          (not jQuery) as needed to simplify the task.
          However, ensure that all logic around sorting,
          updating, and removing records is handled in your
          own code. You should not need to modify any of the
          other existing files.
        </p>
      </section>
      <section>
        <h2>Getting Request Data</h2>
        <p>
          We have provided an API module for getting request
          data into your application. There are two
          functions exported from the API module for
          fetching requests. The first, "getRequests",
          returns a promise; whereas the second,
          "getRequestsSync", synchronously returns an array
          of requests. It is preferred to use the async
          version since it more closesly resembles a
          real-world scenario but handling async operations
          in React adds some complexity. If you are new to
          React or are having difficulty implementing your
          solution with the async version, you can use the
          synchronous API.
        </p>
        <p>
          In a real-world scenario, updates and deletions
          would also be handled via an API but to limit the
          scope of this exercise we do not require these
          operations be handled via the API module. Instead,
          mutations can be handled within your application
          state without worry of persisting these changes
          via an API.
        </p>
      </section>
      <section>
        <h2>Requirements</h2>
        <p>
          Please take the provided{' '}
          <Link to="/wireframe">wireframe</Link> and
          implement the functionality using{' '}
          <a
            target="_blank"
            href="https://reactjs.org/docs/hello-world.html"
          >
            ReactJS
          </a>. If any requirements are unclear, note your
          questions in the code comments, but make an
          assumption and proceed.
        </p>
        <ol>
          <li>
            Filter by Status
            <ul>
              <li>
                User can filter the table by status and the
                table will display the filtered results
              </li>
              <li>
                Filter options include: All, Approved,
                Pending, and Denied
              </li>
            </ul>
          </li>
          <li>
            Results should be ordered in the display by the
            "updated_at" field in descending order (so the
            newest is first)
          </li>
          <li>
            Date fields ("updated_at", "created_at") should
            be displayed in UTC time in the format of
            "%Y-%m-%d" with the following definitions:
            <ul>
              <li>
                %Y - Four-digit year with century (2018,
                e.g.)
              </li>
              <li>%m - two-digit month (12, 04, etc…)</li>
              <li>%d - two-digit day (20, 05, etc…)</li>
            </ul>
          </li>
          <li>
            Edit Status
            <ul>
              <li>
                User may click on the Status in the table
                and change the underlying request record's
                status
              </li>
              <li>
                If status is changed, the “updated_at” field
                should change to the current time
              </li>
            </ul>
          </li>
          <li>
            Delete Record
            <ul>
              <li>
                User may click on the Delete link and delete
                the request record
              </li>
            </ul>
          </li>
        </ol>
      </section>
      <section>
        <h3>Submission</h3>
        <p>
          Include the url of your CodeSandbox in the{' '}
          <a
            href="https://docs.google.com/forms/d/1cMAKfbX6qsX-9WmdqfRru4JBUGJc2sjUZUZmkTjDGsc/viewform"
            target="_blank"
          >
            Submission Form
          </a>{' '}
          to submit your solution
        </p>
      </section>
    </div>
  )
}

export default Instructions
