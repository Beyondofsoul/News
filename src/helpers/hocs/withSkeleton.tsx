import Skeleton from '../../components/Skeleton/Skeleton';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function withSkeleton(Component: any, type: any, count: any) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function WithSkeleton(props: any) {
    const { isLoading, ...restProps } = props;
    if (isLoading) {
      return <Skeleton type={type} count={count} />;
    }
    return <Component {...restProps} />;
  };
}

export default withSkeleton;
