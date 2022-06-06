import { fetcher } from 'utils';

interface CreateTaskProps {
  listId: string;
  taskName: string;
  assignees: number[];
  notify_all?: boolean;
}

const createTask = async ({
  listId,
  taskName,
  assignees,
  notify_all = true
}: CreateTaskProps) => {
  const taskRequest = await fetcher({
    url: `/list/${listId}/task`,
    requestOptions: {
      method: 'POST',
      body: JSON.stringify({
        name: taskName,
        assignees,
        notify_all
      })
    }
  });

  return taskRequest;
};

export default createTask;
