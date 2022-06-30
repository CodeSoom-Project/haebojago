import { useForm } from 'react-hook-form';

export default function MissionWrite() {
  const {
    register,
    handleSubmit,
    onError,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h2>목표 등록 하기</h2>

      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div>
          <label>목표이름</label>
          <input type="text" {...register('title')} />
        </div>
        <div>
          <label>포부한마디</label>
          <textarea type="text" {...register('hopes')} />
        </div>

        <input type="submit" />
      </form>
    </div>
  );
}
