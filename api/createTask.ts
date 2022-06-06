import { fetcher } from 'utils';

interface CreateTaskProps {
  listId: number;
  taskName: string;
  assignees: number[];
  notify_all?: true;
}

const createTask = async ({
  listId,
  taskName,
  assignees,
  notify_all
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
