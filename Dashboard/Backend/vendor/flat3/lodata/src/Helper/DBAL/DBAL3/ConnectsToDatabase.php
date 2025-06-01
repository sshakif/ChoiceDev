<?php

namespace Flat3\Lodata\Helper\DBAL\DBAL3;

use Doctrine\DBAL\Driver\PDO\Connection;
use InvalidArgumentException;
use PDO;

trait ConnectsToDatabase
{
    public function connect(array $params, $username = null, $password = null, array $driverOptions = [])
    {
        if (!isset($params['pdo']) || !$params['pdo'] instanceof PDO) {
            throw new InvalidArgumentException('Laravel requires the "pdo" property to be set and be a PDO instance.');
        }

        return new Connection($params['pdo']);
    }
}
